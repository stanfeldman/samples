from kiss.controllers.core import Controller
from kiss.views.core import JsonResponse
import json
from auth import PublicApiSecureAspect, PrivateApiSecureAspect


class PublicApiController(Controller):
	@PublicApiSecureAspect()
	def get(self, request):
		public_data = {"item1": 543, "item2": 222}
		return JsonResponse(public_data)
		
		
class PrivateApiController(Controller):
	@PrivateApiSecureAspect()
	def get(self, request):
		data = {"item4": 88, "item5": 7777}
		return JsonResponse(data)
