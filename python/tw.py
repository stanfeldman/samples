from twisted.web import server
from twisted.web.resource import Resource
from twisted.internet import reactor
from twisted.internet.defer import Deferred

class Hello(Resource):
	def getChild(self, name, request):
		if name == '':
			return self
		print name
		return Resource.getChild(self, name, request)
			
	def render_GET(self, req):
		d = Deferred()
		reactor.callLater(0, d.callback, None)
		d.addCallback(lambda _: self.say_hi(req))
		return server.NOT_DONE_YET
	
	def say_hi(self, req):
		req.setHeader("content-type", "text/html")
		import time
		#time.sleep(5)
		req.write("<h1>hello!</h1>")
		req.finish()

class Hello2(Resource):
	isLeaf = True
	def render_GET(self, req):
		req.setHeader("content-type", "text/html")
		import time
		#time.sleep(5)
		return "<h1>hello2!</h1>"
		
root = Hello()
root.putChild("2", Hello2())
reactor.listenTCP(8081, server.Site(root))
reactor.run()
