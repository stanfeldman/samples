from gevent import wsgi

class Application(object):
	def on_request(self, env, res):
		print env
		html = "<h1>hello))</h1>"
		res("200 OK", [("Content-Type", "text/html")])
		return [html]
		
if __name__ == "__main__":
	app = Application()
	wsgi.WSGIServer(("", 8080), app.on_request).serve_forever()
