from gevent import wsgi

class Application(object):
	def on_request(self, env, res):
		print env
		res("200 OK", [])
		return ["hello))"]
		
if __name__ == "__main__":
	app = Application()
	wsgi.WSGIServer(("", 8080), app.on_request).serve_forever()
