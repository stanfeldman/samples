from controllers.main import MainController


options = {
	"application": {
		"address": "127.0.0.1",
		"port": 8080
	},
	"urls": {
		"": MainController
	},
	"views": {
		"templates_path": "views.templates",
		"static_path": "views.static"
	}
}

