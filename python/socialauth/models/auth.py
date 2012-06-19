# -*- coding: utf-8 -*-
from kiss.models import Model, CharField, ForeignKeyField
	

class User(Model):
	email = CharField(unique=True)
	
	
class UserAccount(Model):
	user = ForeignKeyField(User)
	userid = CharField(unique=True)
	type = CharField(unique=True)
	token = CharField(unique=True)

