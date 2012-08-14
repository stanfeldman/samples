from time import time
from elixir import metadata, Entity, Field, Unicode, Integer, UnicodeText, setup_all, drop_all, create_all, session, using_options

# Elixir/SqlAlchemy
metadata.bind = "sqlite:///elixir.sqldb"
metadata.bind.echo = False

class Movie(Entity):
	title = Field(Unicode(30))
	year = Field(Integer)
	description = Field(UnicodeText)
	def __repr__(self):
		return '<Movie "%s" (%d)>' % (self.title, self.year)
		
class Person(Entity):
	using_options(inheritance="multi")
	name = Field(Unicode)
	def __repr__(self):
		return '<Person(%s) "%s">' % (self.__class__.__name__, self.name)
	
class Actor(Person):
	using_options(inheritance="multi")
	a = Field(Unicode)
	
class Director(Person):
	using_options(inheritance="multi")
	d = Field(Unicode)

setup_all()
drop_all()
create_all()
start_time = time()
Movie(title=u"Blade Runner", year=1982)
session.commit()
elixir_create_time = (time()-start_time)*1000
start_time = time()
print Movie.query.all()
elixir_select_time = (time()-start_time)*1000
start_time = time()
movie = Movie.query.first()
movie.year = 2222
session.commit()
elixir_edit_time = (time()-start_time)*1000
print Movie.query.all()
start_time = time()
movie.delete()
session.commit()
elixir_delete_time = (time()-start_time)*1000
print Movie.query.all()
#inheritance
Actor(name="boris", a="foo a")
Director(name="dir", d="dddd")
session.commit()
print Person.query.all()

# Peewee
from peewee import SqliteDatabase, Model, CharField, IntegerField, TextField

db_engine = SqliteDatabase("peewee.sqldb")
db_engine.connect()

class Movie(Model):
	title = CharField()
	year = IntegerField()
	description = TextField()
	def __repr__(self):
		return '<Movie "%s" (%d)>' % (self.title, self.year)
Movie._meta.database = db_engine

Movie.drop_table(fail_silently=True)		
Movie.create_table()
start_time = time()
movie = Movie(title=u"Blade Runner", year=1982)
movie.save()
peewee_create_time = (time()-start_time)*1000
start_time = time()
print list(Movie.select())
peewee_select_time = (time()-start_time)*1000
start_time = time()
movie = Movie.get(id=1)
movie.year = 2222
movie.save()
peewee_edit_time = (time()-start_time)*1000
start_time = time()
Movie.delete().where(id=1).execute()
peewee_delete_time = (time()-start_time)*1000

print "select time, ms:: ", "Elixir: %s" % elixir_select_time, "Peewee: %s" % peewee_select_time
print "create time, ms:: ", "Elixir: %s" % elixir_create_time, "Peewee: %s" % peewee_create_time
print "edit time, ms:: ", "Elixir: %s" % elixir_edit_time, "Peewee: %s" % peewee_edit_time
print "delete time, ms:: ", "Elixir: %s" % elixir_delete_time, "Peewee: %s" % peewee_delete_time
