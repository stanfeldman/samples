from gevent import monkey; monkey.patch_all()
from gevent.wsgi import WSGIServer
import time

class Application(object):
	def on_request(self, env, res):
		#print env
		path = env['PATH_INFO']
		status = "200 OK"
		html = "not found"
		if path == "/":
			html = "<h1>hello first response!</h1>"
		elif path == "/2":
			time.sleep(5)
			html = "<h1>hello second response</h1>"
		else:
			status = "404 OK"
		res(status, [("Content-Type", "text/html")])
		return [html]
		
if __name__ == "__main__":
	app = Application()
	WSGIServer(("", 8080), app.on_request).serve_forever()
