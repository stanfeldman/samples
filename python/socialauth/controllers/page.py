from kiss.views.templates import TemplateResponse
from kiss.controllers.core import Controller

class PageController(Controller):
	def get(self, request):
		return TemplateResponse("page.html")
		

class ResultController(Controller):
	def get(self, request):
		if "user" in request.session and request.session["user"]:
			result = request.session["user"]
		else:
			result = request.session["error"]
		return TemplateResponse("result.html", {"result": result})

