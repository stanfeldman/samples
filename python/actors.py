from pykka.gevent import GeventActor
import time

class Receiver(GeventActor):	
	def on_receive(self, message):
		print message
		
class Sender(GeventActor):
	def __init__(self, receiver):
		self.receiver = receiver
		self.receiver.send_request_reply({"k": "some value"})
		
receiver = Receiver.start()
sender = Sender.start(receiver)
