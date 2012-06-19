from controllers.auth import AuthController
from controllers.page import PageController, ResultController
from controllers.db import DbHelper
from kiss.core.events import ApplicationStarted
from kiss.models import SqliteDatabase


options = {
	"application": {
		"address": "127.0.0.1",
		"port": 8080
	},
	"urls": {
		"": PageController,
		"auth": AuthController({
			"common": {
				"base_uri": "http://test.com:8080/auth/",
				"success_uri": "/success"
			},
			"google": {
				"client_id": "691519038986.apps.googleusercontent.com",
				"client_secret": "UsLDDLu-1ry8IgY88zy6qNiU"
			},
			"vk": {
				"client_id": "2378631",
				"client_secret": "oX5geATcgJgWbkfImli9"
			},
			"facebook": {
				"client_id": "485249151491568",
				"client_secret": "66f2503d9806104dd47fca55a6fbbac3"
			}
		}),
		"success": ResultController
	},
	"views": {
		"templates_path": "views.templates"
	},
	"events": {
		ApplicationStarted: DbHelper.application_after_load
	},
	"models": {
		"engine": SqliteDatabase,
		#"host": "localhost",
		"database": 'socialauth.sqldb'#,
		#"user": 'postgres',
		#"password": "postgres"
	}
}

