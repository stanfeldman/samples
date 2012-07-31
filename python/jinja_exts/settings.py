from os import path
current_dir = path.dirname(path.abspath(__file__))
import sys
sys.path.append("/home/stanislavfeldman/projects/python/kiss.py")
sys.path.append("/home/stanislavfeldman/projects/python/compressinja/")
sys.path.append("/home/stanislavfeldman/projects/python/putils/")
sys.path.append("/home/stanislavfeldman/projects/python/pev/")
from kiss.core.application import Application
from controllers.controller1 import Controller1


options = {
	"urls": {
		"": Controller1
	},
	"views": {
		"templates_path": "views.templates",
		"static_path": "views.static",
		"templates_extensions": ["views.extensions.Simple"],
	}
}

