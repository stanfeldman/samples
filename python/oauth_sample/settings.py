from controllers.oauth import PageController, StartAuthController, EndAuthController, ResultController
from controllers.api import PublicApiController, ProtectedApiController
from controllers.db import DbHelper
from kiss.core.application import Event
from kiss.models import SqliteDatabase


options = {
	"application": {
		"address": "127.0.0.1",
		"port": 8080
	},
	"urls": {
		"page": PageController,
		"auth": {
			"start": StartAuthController,
			"end": EndAuthController
		},
		"result": ResultController,
		"api": {
			"public": PublicApiController,
			"protected": ProtectedApiController
		}
	},
	"views": {
		"templates_path": "views.templates"
	},
	"auth": {
		"authorization_uri": "https://accounts.google.com/o/oauth2/auth",
		"scope": "https://www.googleapis.com/auth/tasks",
		"get_token_uri": "https://accounts.google.com/o/oauth2/token",
		"redirect_uri": "http://localhost:8080/auth/end",
		"client_id": "691519038986.apps.googleusercontent.com",
		"client_secret": "UsLDDLu-1ry8IgY88zy6qNiU",
		"target_uri": "https://www.googleapis.com/tasks/v1/lists/@default/tasks"
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

