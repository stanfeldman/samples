from gevent import monkey
monkey.patch_all()
from gevent.server import DatagramServer
from gevent.pool import Pool

class Server(DatagramServer):
	def __init__(self, *args, **kwargs):
		DatagramServer.__init__(self, *args, **kwargs)
		self.clients = []
		
	def handle(self, data, address):
		print "Received '%s' from %s:%s" % (data, address[0], address[1])
		message = "hi from server"
		self.socket.sendto(message, address)
		print "Sent '%s' to %s:%s" % (message, address[0], address[1])
		self.socket.sendto("exit", address)
		
if __name__ == "__main__":
	pool = Pool(1000)
	address = ("127.0.0.1", 1234)
	server = Server(address, spawn=pool)
	server.serve_forever()
