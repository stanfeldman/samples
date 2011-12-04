from __future__ import with_statement
from datetime import datetime
import copy
import decimal
import logging
import os
import re
import threading
import time
from fields import Field, PrimaryKeyField
from exc import ImproperlyConfigured, DoesNotExist
from queries import SelectQuery, UpdateQuery


class BaseAdapter(object):
    """
    The various subclasses of `BaseAdapter` provide a bridge between the high-
    level `Database` abstraction and the underlying python libraries like
    psycopg2.  It also provides a way to unify the pythonic field types with
    the underlying column types used by the database engine.
    
    The `BaseAdapter` provides two types of mappings:    
    - mapping between filter operations and their database equivalents
    - mapping between basic field types and their database column types
    
    The `BaseAdapter` also is the mechanism used by the `Database` class to:
    - handle connections with the database
    - extract information from the database cursor
    """
    operations = {'eq': '= %s'}
    interpolation = '%s'
    
    def get_field_types(self):
        field_types = {
            'integer': 'INTEGER',
            'float': 'REAL',
            'decimal': 'DECIMAL',
            'string': 'VARCHAR',
            'text': 'TEXT',
            'datetime': 'DATETIME',
            'primary_key': 'INTEGER',
            'foreign_key': 'INTEGER',
            'boolean': 'SMALLINT',
        }
        field_types.update(self.get_field_overrides())
        return field_types
    
    def get_field_overrides(self):
        return {}
    
    def connect(self, database, **kwargs):
        raise NotImplementedError
    
    def close(self, conn):
        conn.close()
    
    def lookup_cast(self, lookup, value):
        if lookup in ('contains', 'icontains'):
            return '%%%s%%' % value
        elif lookup in ('startswith', 'istartswith'):
            return '%s%%' % value
        return value
    
    def last_insert_id(self, cursor, model):
        return cursor.lastrowid
    
    def rows_affected(self, cursor):
        return cursor.rowcount


class Database(object):
    """
    A high-level api for working with the supported database engines.  `Database`
    provides a wrapper around some of the functions performed by the `Adapter`,
    in addition providing support for:
    - execution of SQL queries
    - creating and dropping tables and indexes
    """
    def __init__(self, adapter, threadlocals=False, **connect_kwargs):
        self.adapter = adapter
        self.connect_kwargs = connect_kwargs
        self.database = self.connect_kwargs["database"]
        if threadlocals:
            self.__local = threading.local()
        else:
            self.__local = type('DummyLocal', (object,), {})      
        self._conn_lock = threading.Lock()
        self.connect()
    
    def connect(self):
        with self._conn_lock:
            self.__local.conn = self.adapter.connect(**self.connect_kwargs)
            self.__local.closed = False
    
    def close(self):
        with self._conn_lock:
            self.adapter.close(self.__local.conn)
            self.__local.closed = True
    
    def get_conn(self):
        if not hasattr(self.__local, 'closed') or self.__local.closed:
            self.connect()
        return self.__local.conn
    
    def get_cursor(self):
        return self.get_conn().cursor()
    
    def execute(self, sql, params=None, commit=False):
        cursor = self.get_cursor()
        res = cursor.execute(sql, params or ())
        if commit:
            self.commit()
        return cursor
    
    def commit(self):
        self.get_conn().commit()
    
    def rollback(self):
        self.get_conn().rollback()
    
    def last_insert_id(self, cursor, model):
        return self.adapter.last_insert_id(cursor, model)
    
    def rows_affected(self, cursor):
        return self.adapter.rows_affected(cursor)
    
    def column_for_field(self, db_field):
        try:
            return self.adapter.get_field_types()[db_field]
        except KeyError:
            raise AttributeError('Unknown field type: "%s", valid types are: %s' % \
                db_field, ', '.join(self.adapter.get_field_types().keys())
            )
    
    def create_table(self, model_class, safe=False):
        framing = safe and "CREATE TABLE IF NOT EXISTS %s (%s);" or "CREATE TABLE %s (%s);"
        columns = []

        for field in model_class._meta.fields.values():
            columns.append(field.to_sql())

        query = framing % (model_class._meta.db_table, ', '.join(columns))
        
        self.execute(query, commit=True)
    
    def create_index(self, model_class, field, unique=False):
        framing = 'CREATE %(unique)s INDEX %(model)s_%(field)s ON %(model)s(%(field)s);'
        
        if field not in model_class._meta.fields:
            raise AttributeError(
                'Field %s not on model %s' % (field, model_class)
            )
        
        unique_expr = ternary(unique, 'UNIQUE', '')
        
        query = framing % {
            'unique': unique_expr,
            'model': model_class._meta.db_table,
            'field': field
        }
        
        self.execute(query, commit=True)
    
    def drop_table(self, model_class, fail_silently=False):
        framing = fail_silently and 'DROP TABLE IF EXISTS %s;' or 'DROP TABLE %s;'
        self.execute(framing % model_class._meta.db_table, commit=True)
    
    def get_indexes_for_table(self, table):
        raise NotImplementedError
    
    def get_tables(self):
        raise NotImplementedError


class BaseModelOptions(object):
    ordering = None

    def __init__(self, model_class, options=None):
        for k, v in options.items():
            setattr(self, k, v)
        
        self.rel_fields = {}
        self.reverse_relations = {}
        self.fields = {}
        self.model_class = model_class
    
    def get_sorted_fields(self):
        return sorted(self.fields.items(), key=lambda (k,v): (k == self.pk_name and 1 or 2, v._order))
    
    def get_field_names(self):
        return [f[0] for f in self.get_sorted_fields()]
    
    def get_fields(self):
        return [f[1] for f in self.get_sorted_fields()]
    
    def get_field_by_name(self, name):
        if name in self.fields:
            return self.fields[name]
        raise AttributeError('Field named %s not found' % name)
    
    def get_related_field_by_name(self, name):
        if name in self.rel_fields:
            return self.fields[self.rel_fields[name]]
    
    def get_related_field_for_model(self, model, name=None):
        for field in self.fields.values():
            if isinstance(field, ForeignKeyField) and field.to == model:
                if name is None or name == field.name or name == field.descriptor:
                    return field
    
    def get_reverse_related_field_for_model(self, model, name=None):
        for field in model._meta.fields.values():
            if isinstance(field, ForeignKeyField) and field.to == self.model_class:
                if name is None or name == field.name or name == field.descriptor:
                    return field
    
    def rel_exists(self, model):
        return self.get_related_field_for_model(model) or \
               self.get_reverse_related_field_for_model(model)


class BaseModel(type):
    inheritable_options = ['database', 'ordering']
    
    def __new__(cls, name, bases, attrs):
        cls = super(BaseModel, cls).__new__(cls, name, bases, attrs)

        if not bases:
            return cls

        attr_dict = {}
        meta = attrs.pop('Meta', None)
        if meta:
            attr_dict = meta.__dict__
        
        for b in bases:
            base_meta = getattr(b, '_meta', None)
            if not base_meta:
                continue
            
            for (k, v) in base_meta.__dict__.items():
                if k in cls.inheritable_options and k not in attr_dict:
                    attr_dict[k] = v
                elif k == 'fields':
                    for field_name, field_obj in v.items():
                        if isinstance(field_obj, PrimaryKeyField):
                            continue
                        if field_name in cls.__dict__:
                            continue
                        if isinstance(field_obj, ForeignKeyField):
                            field_name = field_obj.descriptor
                        field_copy = copy.deepcopy(field_obj)
                        setattr(cls, field_name, field_copy)

        _meta = BaseModelOptions(cls, attr_dict)
        
        if not hasattr(_meta, 'db_table'):
            _meta.db_table = re.sub('[^a-z]+', '_', cls.__name__.lower())

        setattr(cls, '_meta', _meta)
        
        _meta.pk_name = None

        for name, attr in cls.__dict__.items():
            if isinstance(attr, Field):
                attr.add_to_class(cls, name)
                _meta.fields[attr.name] = attr
                if isinstance(attr, PrimaryKeyField):
                    _meta.pk_name = attr.name
        
        if _meta.pk_name is None:
            _meta.pk_name = 'id'
            pk = PrimaryKeyField()
            pk.add_to_class(cls, _meta.pk_name)
            _meta.fields[_meta.pk_name] = pk

        _meta.model_name = cls.__name__

        for field in _meta.fields.values():
            field.class_prepared()
                
        if hasattr(cls, '__unicode__'):
            setattr(cls, '__repr__', lambda self: '<%s: %s>' % (
                _meta.model_name, self.__unicode__()))

        exception_class = type('%sDoesNotExist' % _meta.model_name, (DoesNotExist,), {})
        cls.DoesNotExist = exception_class
        
        return cls


class Model(object):
    __metaclass__ = BaseModel
    
    def __init__(self, *args, **kwargs):
        self.get_field_dict()
        for k, v in kwargs.items():
            setattr(self, k, v)
    
    def __eq__(self, other):
        return other.__class__ == self.__class__ and \
               self.get_pk() and \
               other.get_pk() == self.get_pk()
    
    def get_field_dict(self):
        def get_field_val(field):
            field_value = getattr(self, field.name)
            if not self.get_pk() and field_value is None and field.default is not None:
                if callable(field.default):
                    field_value = field.default()
                else:
                    field_value = field.default
                setattr(self, field.name, field_value)
            return (field.name, field_value)
        
        pairs = map(get_field_val, self._meta.fields.values())
        return dict(pairs)
    
    @classmethod
    def table_exists(cls):
        return cls._meta.db_table in cls._meta.database.get_tables()
    
    @classmethod
    def create_table(cls, fail_silently=False):
        if fail_silently and cls.table_exists():
            return

        cls._meta.database.create_table(cls)
        
        for field_name, field_obj in cls._meta.fields.items():
            if isinstance(field_obj, PrimaryKeyField):
                cls._meta.database.create_index(cls, field_obj.name, True)
            elif isinstance(field_obj, ForeignKeyField):
                cls._meta.database.create_index(cls, field_obj.name, field_obj.unique)
            elif field_obj.db_index or field_obj.unique:
                cls._meta.database.create_index(cls, field_obj.name, field_obj.unique)
    
    @classmethod
    def drop_table(cls, fail_silently=False):
        cls._meta.database.drop_table(cls, fail_silently)
    
    @classmethod
    def filter(cls, *args, **kwargs):
        return filter_query(cls, *args, **kwargs)
    
    @classmethod
    def select(cls, query=None):
        select_query = SelectQuery(cls, query)
        if cls._meta.ordering:
            select_query = select_query.order_by(*cls._meta.ordering)
        return select_query
    
    @classmethod
    def update(cls, **query):
        return UpdateQuery(cls, **query)
    
    @classmethod
    def insert(cls, **query):
        return InsertQuery(cls, **query)
    
    @classmethod
    def delete(cls, **query):
        return DeleteQuery(cls, **query)
    
    @classmethod
    def raw(cls, sql, *params):
        return RawQuery(cls, sql, *params)

    @classmethod
    def create(cls, **query):
        inst = cls(**query)
        inst.save()
        return inst

    @classmethod
    def get_or_create(cls, **query):
        try:
            inst = cls.get(**query)
        except cls.DoesNotExist:
            inst = cls.create(**query)
        return inst
    
    @classmethod            
    def get(cls, *args, **kwargs):
        return cls.select().get(*args, **kwargs)
    
    def get_pk(self):
        return getattr(self, self._meta.pk_name, None)
    
    def save(self):
        field_dict = self.get_field_dict()
        field_dict.pop(self._meta.pk_name)
        if self.get_pk():
            update = self.update(
                **field_dict
            ).where(**{self._meta.pk_name: self.get_pk()})
            update.execute()
        else:
            insert = self.insert(**field_dict)
            new_pk = insert.execute()
            setattr(self, self._meta.pk_name, new_pk)

    def delete_instance(self):
        return self.delete().where(**{
            self._meta.pk_name: self.get_pk()
        }).execute()
        
# helpers
ternary = lambda cond, t, f: (cond and [t] or [f])[0]
