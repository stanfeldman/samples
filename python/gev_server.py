from gevent.wsgi import WSGIServer

def application(env, start_response):
	path = env['PATH_INFO']
	if path == '/':
		start_response('200 OK', [('Content-Type', 'text/html')])
		return [open("gev_server_page.html").read()]
	elif path == "/ws":
		#print env
		start_response('200 OK', [('Content-Type', 'text/html')])
		return ['hi ws']
	else:
		start_response('404 Not Found', [('Content-Type', 'text/html')])
		return ['<h1>Not Found</h1>']

if __name__ == '__main__':
	WSGIServer(('', 8080), application, keyfile='server.key', certfile='server.crt').serve_forever()
