from twisted.internet import reactor
from twisted.internet.protocol import Factory, Protocol


class IphoneChat(Protocol):
	def connectionMade(self):
		self.factory.clients.append(self)
		print "clients are ", self.factory.clients

	def dataReceived(self, data):
		parts = data.split(":")
		if len(parts) > 1:
			command = parts[0]
			content = parts[1]
			msg = ""
			if command == "iam":
				self.name = content
				msg = self.name + " has joined"
			elif command == "msg":
				msg = self.name + ": " + content
			for c in self.factory.clients:
				c.message(msg)
			print msg

	def connectionLost(self, reason):
		self.factory.clients.remove(self)

	def message(self, msg):
		self.transport.write(msg+"\n")


if __name__ == "__main__":
	factory = Factory()
	factory.clients = []
	factory.protocol = IphoneChat
	reactor.listenTCP(6000, factory)
	reactor.run()