from gevent import monkey, joinall, Greenlet
monkey.patch_all()
from socket import socket, AF_INET, SOCK_STREAM


class Node(Greenlet):
	def __init__(self, local_port=5555, other_node_address=None):
		Greenlet.__init__(self)
		self.address = ("127.0.0.1", local_port)
		self.nodes = []
		if other_node_address:
			self.nodes.append(other_node_address)
		self.socket = socket(AF_INET, SOCK_STREAM)
		self.socket.bind(self.address)
		self.socket.listen(5)
		
	def __del__(self):
		self.socket.close()
		
	def connect(self):
		for node in self.nodes:
			client_socket = self.send(node, "get_nodes")
			#nodes = client_socket.recv(8192)
			#print nodes
		
	def send(self, address, msg):
		client_socket = socket(AF_INET, SOCK_STREAM)
		client_socket.connect(address)
		client_socket.send(msg)
		return client_socket
		#print "Node %s:%s sent '%s' to %s:%s" % (self.address[0], self.address[1], msg, address[0], address[1])
		
	def _run(self):
		self.loop()
		self.connect()
				
	def loop(self):
		while True:
			(client_socket, address) = self.socket.accept()
			data = client_socket.recv(8192)
			if data == "exit":
				break
			elif data == "get_nodes":
				print "op"
				client_socket.send("nodes")
			print "Node %s:%s received '%s' from %s:%s" % (self.address[0], self.address[1], data, address[0], address[1])
			client_socket.close()
				
	def stop(self):
		self.send(self.address, "exit")

				
n1 = Node(5555)
n2 = Node(5556, n1.address)
n1.start()
n2.start()
n1.send(n2.address, "hi")
n1.stop()
n2.stop()
joinall([n1,n2])
