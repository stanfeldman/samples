# -*- coding: utf-8 -*-
from kiss.models import Model, CharField, IntegerField, ForeignKeyField, FloatField, DoubleField


class Consumer(Model):
	name = CharField()
	client_id = CharField(unique=True)
	client_secret = CharField()
	redirect_uri = CharField()

