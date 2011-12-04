import re
from core import Model

ternary = lambda cond, t, f: (cond and [t] or [f])[0]


class FieldDescriptor(object):
    def __init__(self, field):
        self.field = field
        self._cache_name = '__%s' % self.field.name
    
    def __get__(self, instance, instance_type=None):
        if instance:
            return getattr(instance, self._cache_name, None)
        return self.field
    
    def __set__(self, instance, value):
        setattr(instance, self._cache_name, value)


class Field(object):
    db_field = ''
    default = None
    field_template = "%(column_type)s%(nullable)s"
    _field_counter = 0
    _order = 0

    def get_attributes(self):
        return {}
    
    def __init__(self, null=False, db_index=False, unique=False, verbose_name=None,
                 help_text=None, *args, **kwargs):
        self.null = null
        self.db_index = db_index
        self.unique = unique
        self.attributes = self.get_attributes()
        self.default = kwargs.get('default', None)
        self.verbose_name = verbose_name
        self.help_text = help_text
        
        kwargs['nullable'] = ternary(self.null, '', ' NOT NULL')
        self.attributes.update(kwargs)
        
        Field._field_counter += 1
        self._order = Field._field_counter
    
    def add_to_class(self, klass, name):
        self.name = name
        self.model = klass
        self.verbose_name = self.verbose_name or re.sub('_+', ' ', name).title()
        setattr(klass, name, FieldDescriptor(self))
    
    def render_field_template(self):
        col_type = self.model._meta.database.column_for_field(self.db_field)
        self.attributes['column_type'] = col_type
        return self.field_template % self.attributes
    
    def to_sql(self):
        rendered = self.render_field_template()
        return '%s %s' % (self.name, rendered)
    
    def null_wrapper(self, value, default=None):
        if (self.null and value is None) or default is None:
            return value
        return value or default
    
    def db_value(self, value):
        return value
    
    def python_value(self, value):
        return value
    
    def lookup_value(self, lookup_type, value):
        return self.db_value(value)

    def class_prepared(self):
        pass


class CharField(Field):
    db_field = 'string'
    field_template = '%(column_type)s(%(max_length)d)%(nullable)s'
    
    def get_attributes(self):
        return {'max_length': 255}
    
    def db_value(self, value):
        if self.null and value is None:
            return value
        value = value or ''
        return value[:self.attributes['max_length']]
    
    def lookup_value(self, lookup_type, value):
        if lookup_type == 'contains':
            return '*%s*' % self.db_value(value)
        elif lookup_type == 'icontains':
            return '%%%s%%' % self.db_value(value)
        else:
            return self.db_value(value)
    

class TextField(Field):
    db_field = 'text'
    
    def db_value(self, value):
        return self.null_wrapper(value, '')
    
    def lookup_value(self, lookup_type, value):
        if lookup_type == 'contains':
            return '*%s*' % self.db_value(value)
        elif lookup_type == 'icontains':
            return '%%%s%%' % self.db_value(value)
        else:
            return self.db_value(value)


class DateTimeField(Field):
    db_field = 'datetime'
    
    def python_value(self, value):
        if isinstance(value, basestring):
            value = value.rsplit('.', 1)[0]
            return datetime(*time.strptime(value, '%Y-%m-%d %H:%M:%S')[:6])
        return value


class IntegerField(Field):
    db_field = 'integer'
    
    def db_value(self, value):
        return self.null_wrapper(value, 0)
    
    def python_value(self, value):
        if value is not None:
            return int(value)


class BooleanField(IntegerField):
    db_field = 'boolean'
    
    def db_value(self, value):
        return bool(value)
    
    def python_value(self, value):
        return bool(value)


class FloatField(Field):
    db_field = 'float'
    
    def db_value(self, value):
        return self.null_wrapper(value, 0.0)
    
    def python_value(self, value):
        if value is not None:
            return float(value)


class DecimalField(Field):
    db_field = 'decimal'
    field_template = '%(column_type)s(%(max_digits)d, %(decimal_places)d)%(nullable)s'
    
    def get_attributes(self):
        return {
            'max_digits': 10,
            'decimal_places': 5,
        }
    
    def db_value(self, value):
        return self.null_wrapper(value, decimal.Decimal(0))
    
    def python_value(self, value):
        if value is not None:
            if isinstance(value, decimal.Decimal):
                return value
            return decimal.Decimal(str(value))


class PrimaryKeyField(IntegerField):
    db_field = 'primary_key'
    field_template = "%(column_type)s NOT NULL PRIMARY KEY"


class ForeignRelatedObject(object):    
    def __init__(self, to, field):
        self.to = to
        self.field = field
        self.field_name = self.field.name
        self.cache_name = '_cache_%s' % self.field_name
    
    def __get__(self, instance, instance_type=None):
        if not instance:
            return self.field
        
        if not getattr(instance, self.cache_name, None):
            id = getattr(instance, self.field_name, 0)
            qr = self.to.select().where(**{self.to._meta.pk_name: id})
            try:
                setattr(instance, self.cache_name, qr.get())
            except self.to.DoesNotExist:
                if not self.field.null:
                    raise
        return getattr(instance, self.cache_name, None)
    
    def __set__(self, instance, obj):
        assert isinstance(obj, self.to), "Cannot assign %s, invalid type" % obj
        setattr(instance, self.field_name, obj.get_pk())
        setattr(instance, self.cache_name, obj)


class ReverseForeignRelatedObject(object):
    def __init__(self, related_model, name):
        self.field_name = name
        self.related_model = related_model
    
    def __get__(self, instance, instance_type=None):
        query = {self.field_name: instance.get_pk()}
        qr = self.related_model.select().where(**query)
        return qr


class ForeignKeyField(IntegerField):
    db_field = 'foreign_key'
    field_template = '%(column_type)s%(nullable)s REFERENCES %(to_table)s (%(to_pk)s)%(cascade)s%(extra)s'
    
    def __init__(self, to, null=False, related_name=None, cascade=False, extra=None, *args, **kwargs):
        self.to = to
        self._related_name = related_name
        self.cascade = cascade
        self.extra = extra

        kwargs.update({
            'cascade': ' ON DELETE CASCADE' if self.cascade else '',
            'extra': self.extra or '',
        })
        super(ForeignKeyField, self).__init__(null=null, *args, **kwargs)
    
    def add_to_class(self, klass, name):
        self.descriptor = name
        self.name = name + '_id'
        self.model = klass

        if self.to == 'self':
            self.to = self.model

        self.verbose_name = self.verbose_name or re.sub('_', ' ', name).title()
        
        if self._related_name is not None:
            self.related_name = self._related_name
        else:
            self.related_name = klass._meta.db_table + '_set'
        
        klass._meta.rel_fields[name] = self.name
        setattr(klass, self.descriptor, ForeignRelatedObject(self.to, self))
        setattr(klass, self.name, None)
        
        reverse_rel = ReverseForeignRelatedObject(klass, self.name)
        setattr(self.to, self.related_name, reverse_rel)
        self.to._meta.reverse_relations[self.related_name] = klass
    
    def lookup_value(self, lookup_type, value):
        if isinstance(value, Model):
            return value.get_pk()
        return value or None
    
    def db_value(self, value):
        if isinstance(value, Model):
            return value.get_pk()
        return value

    def class_prepared(self):
        # unfortunately because we may not know the primary key field
        # at the time this field's add_to_class() method is called, we
        # need to update the attributes after the class has been built
        self.attributes.update({
            'to_table': self.to._meta.db_table,
            'to_pk': self.to._meta.pk_name,
        })
