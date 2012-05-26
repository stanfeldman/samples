from putils.aop import Aspect
from kiss.core.exceptions import Forbidden
from models.auth import Consumer, User, ConsumerUser
from peewee import DoesNotExist
from kiss.controllers.core import Controller
from models.auth import Consumer, User, ConsumerUser
from uuid import uuid4
from kiss.views.templates import TemplateResponse
from kiss.views.core import RedirectResponse, JsonResponse
from urllib import urlencode


class ApiSecureAspect(Aspect):
	def __init__(self, token_name):
		Aspect.__init__(self)
		self.token_name = token_name
		
	def on_enter(self, call):
		request = call.args[1]
		if not self.token_name in request.args:
			return Forbidden("You should pass %s in request args" % self.token_name)
		token = request.args[self.token_name]
		kwargs = {self.token_name: token}
		try:
			request.consumer = Consumer.get(**kwargs)
		except DoesNotExist:
			return Forbidden("Wrong client_id")
			
			
class PublicApiSecureAspect(ApiSecureAspect):
	def __init__(self):
		ApiSecureAspect.__init__(self, "client_id")
			
			
class ProtectedApiSecureAspect(ApiSecureAspect):
	def __init__(self):
		ApiSecureAspect.__init__(self, "access_token")
			
			
class AuthController(Controller):
	def get(self, request):
		consumer = Consumer.get(client_id=request.args["client_id"])
		temp_token = str(uuid4())
		request.session[consumer.client_id] = temp_token
		return TemplateResponse("user_auth.html", {"consumer": consumer, "temp_token": temp_token})
		
	def post(self, request):
		client_id = request.form["client_id"]
		temp_token = request.form["temp_token"]
		if request.session[client_id] != temp_token:
			return Forbidden("Wrong client_id and temp_token")
		user = User.get(username="boris")
		consumer = Consumer.get(client_id=client_id)
		consumer.code = str(uuid4())
		consumer.save()
		ConsumerUser.get_or_create(consumer=consumer, user=user)
		params = {"code": consumer.code}
		return RedirectResponse("%s?%s" % (consumer.redirect_uri, urlencode(params)))
		
		
class TokenController(Controller):
	def post(self, request):
		client_id = request.form["client_id"]
		client_secret = request.form["client_secret"]
		code = request.form["code"]
		try:
			consumer = Consumer.get(client_id=client_id, client_secret=client_secret, code=code)
			consumer.access_token = str(uuid4())
			consumer.save()
			params = {"access_token": consumer.access_token}
			return JsonResponse(params)
		except DoesNotExist:
			return Forbidden("Wrong parameters")
