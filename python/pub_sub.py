from gevent import monkey
monkey.patch_all()
from gevent import Greenlet, joinall
from kombu import BrokerConnection, Exchange, Queue
from kombu.exceptions import TimeoutError
from time import time

def publish():
	print "start publishing"
	start_time = time()
	with BrokerConnection("amqp://guest:guest@localhost//") as connection:
		exchange = Exchange("addstore", "direct", durable=True)
		with connection.Producer(exchange=exchange, serializer="json", routing_key="grabber", auto_declare=True) as producer:
			body = {"name": "stas", "age": 23}
			producer.publish(body)
			print "published: %s" % body
			print "publish time: %s ms" % ((time()-start_time)*1000)
def consume():
	print "start consuming"
	start_time = time()
	def callback(body, message):
		print "consumed: %s" % body
		message.ack()
		print "consume time: %s ms" % ((time()-start_time)*1000)
	with BrokerConnection("amqp://guest:guest@localhost//") as connection:
		exchange = Exchange("addstore", "direct", durable=True)
		queue = Queue("grabber", exchange=exchange)
		with connection.Consumer([queue], callbacks=[callback], auto_declare=True) as consumer:
			while(True):
				try:
					connection.drain_events(timeout=1)
				except TimeoutError:
					break
					
consumer = Greenlet(consume)
publisher = Greenlet(publish)
consumer.start()
#publisher.start()
print "app started"
joinall([publisher, consumer])
