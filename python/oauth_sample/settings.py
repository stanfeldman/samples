from controllers.auth_usage import PageController, StartAuthController, EndAuthController, ResultController
from controllers.api import PublicApiController, ProtectedApiController
from controllers.db import DbHelper
from kiss.core.application import Event
from kiss.models import SqliteDatabase
from controllers.auth import AuthController, TokenController


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
		"page": PageController,
		"auth_usage": {
			"start": StartAuthController,
			"end": EndAuthController
		},
		"result": ResultController
	},
	"views": {
		"templates_path": "views.templates"
	},
	"events": {
		Event.ApplicationAfterLoad: DbHelper.application_after_load
	},
	"models": {
		"engine": SqliteDatabase,
		#"host": "localhost",
		"database": 'oauth_sample.sqldb'#,
		#"user": 'postgres',
		#"password": "postgres"
	}
}

