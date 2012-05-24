from kiss.views.templates import TemplateResponse
from kiss.views.core import RedirectResponse
from kiss.controllers.core import Controller
from kiss.core.application import Application
from urllib import urlencode
import requests
import json


class PageController(Controller):
	def get(self, request):
		return TemplateResponse("page.html")
	
class StartAuthController(Controller):
	def get(self, request):
		options = Application().options["auth"]
		params = {
			"client_id": options["client_id"],
			"redirect_uri": options["redirect_uri"],
			"scope": options["scope"],
			"response_type": "code",
			"approval_prompt": "force",
			"access_type": "offline"
		}
		return RedirectResponse("%s?%s" % (options["authorization_uri"], urlencode(params)))
		

class EndAuthController(Controller):
	def get(self, request):
		options = Application().options["auth"]
		params = {
			"client_id": options["client_id"],
			"client_secret": options["client_secret"],
			"grant_type": "authorization_code",
			"code": request.args["code"],
			"redirect_uri": options["redirect_uri"]
		}
		res = json.loads(requests.post(options["get_token_uri"], params).text)
		request.session["access_token"] = res["access_token"]
		print request.session["access_token"]
		return RedirectResponse("/result")
		

class ResultController(Controller):
	def get(self, request):
		options = Application().options["auth"]
		params = {"access_token": request.session["access_token"]}
		result = json.loads(requests.get("%s?%s" % (options["target_uri"], urlencode(params))).text)
		return TemplateResponse("result.html", {"result": result})

