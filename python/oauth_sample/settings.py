from controllers.auth_usage import PageController, StartAuthController, StartPasswordAuthController, EndAuthController, ResultController, LogoutController
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
			"start_password": StartPasswordAuthController,
			"end": EndAuthController,
			"logout": LogoutController
		},
		"result": ResultController
	},
	"views": {
		"templates_path": "views.templates"
	},
	"events": {
		Event.ApplicationStarted: DbHelper.application_after_load
	},
	"models": {
		"engine": SqliteDatabase,
		#"host": "localhost",
		"database": 'oauth_sample.sqldb'#,
		#"user": 'postgres',
		#"password": "postgres"
	}
}

