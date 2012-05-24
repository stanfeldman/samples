from putils.aop import Aspect
from kiss.core.exceptions import Forbidden
from models.auth import Consumer, User, ConsumerUser
from peewee import DoesNotExist


class ApiSecureAspect(Aspect):
	def __init__(self, token_name):
		Aspect.__init__(self)
		self.token_name = token_name
		
	def on_enter(self, call):
		request = call.args[1]
		res = self.check_consumer(request, self.token_name)
		if not isinstance(res, Consumer):
			return res
			
	def check_consumer(self, request, token_name):
		if not self.token_name in request.args:
			return Forbidden("You should pass %s in request args" % self.token_name)
		token = request.args[self.token_name]
		kwargs = {self.token_name: token}
		try:
			return Consumer.get(**kwargs)
		except DoesNotExist:
			return Forbidden("Wrong client_id")
			
			
class PublicApiSecureAspect(ApiSecureAspect):
	def __init__(self):
		ApiSecureAspect.__init__(self, "client_id")
			
			
class PrivateApiSecureAspect(ApiSecureAspect):
	def __init__(self):
		ApiSecureAspect.__init__(self, "access_token")
		
	def on_enter(self, call):
		request = call.args[1]
		consumer = self.check_consumer(request, self.token_name)
		if not isinstance(consumer, Consumer):
			return consumer
		if not "username" in request.args:
			return Forbidden("You should pass %s in request args" % "username")
		username = request.args["username"]
		try:
			user = User.get(username=username)
			ConsumerUser.get(consumer=consumer, user=user)
		except DoesNotExist:
			return Forbidden("Wrong %s and %s" %(self.token_name, "username"))
