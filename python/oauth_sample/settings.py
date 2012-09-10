from controllers.auth_usage import PageController, StartAuthController, StartPasswordAuthController, EndAuthController, ResultController, LogoutController
from controllers.api import PublicApiController, ProtectedApiController
from controllers.db import DbHelper
from kiss.models import SqliteDatabase
from controllers.auth import AuthController, TokenController

def str_url_regex(str_name):
	return r"""(?P<%s>[^ \,\:\;\"\\/']+)""" % str_name

options = {
	"application": {
		"address": "127.0.0.1",
		"port": 8080
	},
	"urls": {
		"api": {
			"public": PublicApiController,
			"protected": ProtectedApiController
		},
		"auth": {
			"auth": AuthController,
			"token": TokenController
		},
		"": PageController,
		"auth_usage": {
			str_url_regex("backend"): {
				"start": StartAuthController,
				"end": EndAuthController,
			},
			"start_password": StartPasswordAuthController,
			"logout": LogoutController
		},
		str_url_regex("backend") + "/result": ResultController
	},
	"views": {
		"templates_path": "views.templates"
	},
	"events": {
		"ApplicationStarted": DbHelper.application_after_load
	},
	"models": {
		"engine": SqliteDatabase,
		#"host": "localhost",
		"database": 'oauth_sample.sqldb'#,
		#"user": 'postgres',
		#"password": "postgres"
	}
}

