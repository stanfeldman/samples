import pika

connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
channel = connection.channel()
channel.queue_declare(queue="hello")
channel.basic_publish(exchange="", routing_key="hello", body="hello from stas")
print "sent"
def callback(channel, method, properties, body):
	print "rec: %s" % body
	channel.stop_consuming()
channel.basic_consume(callback, queue="hello", no_ack=True)
channel.start_consuming()
connection.close()
