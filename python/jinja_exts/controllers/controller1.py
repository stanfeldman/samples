from kiss.views.templates import TemplateResponse
from kiss.controllers.core import Controller
from kiss.core.application import Application


class Controller1:
	def get(self, request):
		return TemplateResponse("view.html", { "foo": "bar", "users": [{"url": "google.com", "username": "brin"}] })
		
