# -*- coding: utf-8 -*-
from kiss.models import Model, CharField, IntegerField, ForeignKeyField, FloatField, DoubleField


class Consumer(Model):
	name = CharField()
	client_id = CharField(unique=True)
	client_secret = CharField()
	code = CharField() #grant code
	access_token = CharField()
	redirect_uri = CharField()
	

class User(Model):
	username = CharField(unique=True)
	password = CharField()
	
	
class ConsumerUser(Model):
	consumer = ForeignKeyField(Consumer)
	user = ForeignKeyField(User)

