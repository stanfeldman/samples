from kiss.views.templates import TemplateResponse
from kiss.views.core import RedirectResponse
from kiss.controllers.core import Controller
from kiss.core.application import Application
from urllib import urlencode
import requests
import json
from db import DbHelper
from werkzeug.urls import url_decode


options = {
	"feldman": {
		"authorization_uri": "http://localhost:8080/auth/auth",
		"scope": "protected_api",
		"get_token_uri": "http://localhost:8080/auth/token",
		"redirect_uri": "http://localhost:8080/auth_usage/feldman/end",
		"client_id": "2",
		"client_secret": "secret2",
		"target_uri": "http://localhost:8080/api/protected"
	},
	"google": {
		"authorization_uri": "https://accounts.google.com/o/oauth2/auth",
		"scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
		"get_token_uri": "https://accounts.google.com/o/oauth2/token",
		"redirect_uri": "http://localhost:8080/auth_usage/google/end",
		"client_id": "691519038986.apps.googleusercontent.com",
		"client_secret": "UsLDDLu-1ry8IgY88zy6qNiU",
		"target_uri": "https://www.googleapis.com/oauth2/v1/userinfo"
	},
	"vk": {
		"authorization_uri": "http://api.vk.com/oauth/authorize",
		"scope": "",
		"get_token_uri": "https://api.vk.com/oauth/token",
		"redirect_uri": "http://test.com:8080/auth_usage/vk/end",
		"client_id": "2378631",
		"client_secret": "oX5geATcgJgWbkfImli9",
		"target_uri": "https://api.vk.com/method/users.get"
	},
	"facebook": {
		"authorization_uri": "https://www.facebook.com/dialog/oauth",
		"scope": "email",
		"get_token_uri": "https://graph.facebook.com/oauth/access_token",
		"redirect_uri": "http://test.com:8080/auth_usage/facebook/end",
		"client_id": "485249151491568",
		"client_secret": "66f2503d9806104dd47fca55a6fbbac3",
		"target_uri": "https://graph.facebook.com/me"
	}
}


class PageController(Controller):
	def get(self, request):
		return TemplateResponse("page.html")
	
class StartAuthController(Controller):
	def get(self, request):
		current_options = options[request.params["backend"]]
		params = {
			"client_id": current_options["client_id"],
			"redirect_uri": current_options["redirect_uri"],
			"scope": current_options["scope"],
			"response_type": "code",
			"approval_prompt": "force",
			"access_type": "offline"
		}
		return RedirectResponse("%s?%s" % (current_options["authorization_uri"], urlencode(params)))
		

class EndAuthController(Controller):
	def get(self, request):
		current_options = options[request.params["backend"]]
		params = {
			"client_id": current_options["client_id"],
			"client_secret": current_options["client_secret"],
			"grant_type": "authorization_code",
			"code": request.args["code"],
			"redirect_uri": current_options["redirect_uri"]
		}
		response = requests.post(current_options["get_token_uri"], params).text
		#res = url_decode(response) # facebook
		res = json.loads(response) # standart oauth 2.0
		#request.session["user_id"] = res["user_id"] # vkontakte
		request.session["access_token"] = res["access_token"]
		return RedirectResponse(request.params["backend"] + "/result")
		
		
class StartPasswordAuthController(Controller):
	def get(self, request):
		return TemplateResponse("user_password_auth.html")
		
	def post(self, request):
		params = {
			"client_id": "3",
			"client_secret": "secret3",
			"grant_type": "password",
			"username": request.form["username"],
			"password": DbHelper().hash_password(request.form["password"])
		}
		resp = requests.post(options["get_token_uri"], params).text
		res = json.loads(resp)
		if "access_token" in res:
			request.session["access_token"] = res["access_token"]
			print "access_token", request.session["access_token"]
		else:
			request.session["error"] = res
		return RedirectResponse("/result")

class ResultController(Controller):
	def get(self, request):
		current_options = options[request.params["backend"]]
		if "access_token" in request.session and request.session["access_token"]:
			self.access_token = request.session["access_token"]
			#params = {"access_token": request.session["access_token"], "uids": request.session["user_id"], "fields": "uid, first_name, last_name, nickname, screen_name, sex, bdate, city, country, photo, photo_medium, photo_big"} # vkontakte
			params = {"access_token": request.session["access_token"]}
			result = json.loads(requests.get("%s?%s" % (current_options["target_uri"], urlencode(params)), auth=self.auth).text)
		else:
			result = request.session["error"]
		return TemplateResponse("result.html", {"result": result})
		
	def auth(self, request):
		request.headers["Authorization"] = "Bearer %s" % self.access_token
		return request
		
		
class LogoutController(Controller):
	def get(self, request):
		request.session.delete()
		return RedirectResponse("/page")

