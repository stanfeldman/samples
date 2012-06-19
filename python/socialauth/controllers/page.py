from kiss.views.templates import TemplateResponse
from kiss.controllers.core import Controller

class PageController(Controller):
	def get(self, request):
		return TemplateResponse("page.html")
		

class ResultController(Controller):
	def get(self, request):
		print request.args
		if "error" in request.args:
			result = request.args["error"]
		#else:
		#	result = request.args["id"]
		return TemplateResponse("result.html", {"result": request.args})

