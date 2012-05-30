from kiss.views.templates import TemplateResponse
from kiss.controllers.core import Controller

	
class MainController(Controller):
	def get(self, request):
		return TemplateResponse("1.html")

