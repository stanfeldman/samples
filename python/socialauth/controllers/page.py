from kiss.views.templates import TemplateResponse
from kiss.controllers.core import Controller

class PageController(Controller):
	def get(self, request):
		return TemplateResponse("page.html")
		

class ResultController(Controller):
	def get(self, request):
		return TemplateResponse("result.html", {"result": request.args})

