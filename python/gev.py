import gevent.monkey
gevent.monkey.patch_all()
import gevent
import kombu
import time

def publish():
	print "start publishing"
	time1 = time.time()
	with kombu.BrokerConnection("amqp://guest:guest@localhost//") as connection:
		exchange = kombu.Exchange("media", "direct", durable=True)
		with connection.Producer(exchange=exchange, serializer="json", routing_key="video", auto_declare=True) as producer:
			producer.publish({"name": "stas", "age": 23})
			time2 = time.time()
			print "publish time: %s" % (time2-time1)
def consume():
	print "start consuming"
	time1 = time.time()
	def callback(body, message):
		print "rec: %s" % body
		message.ack()
		time2 = time.time()
		print "consume time: %s" % (time2-time1)
	with kombu.BrokerConnection("amqp://guest:guest@localhost//") as connection:
		exchange = kombu.Exchange("media", "direct", durable=True)
		queue = kombu.Queue("video", exchange=exchange, routing_key="video")
		with connection.Consumer([queue], callbacks=[callback], auto_declare=True) as consumer:
			connection.drain_events()
g_con = gevent.Greenlet(consume)
g_pub = gevent.Greenlet(publish)
g_con.start()
g_pub.start()
print "app started"
gevent.joinall([g_pub, g_con])
