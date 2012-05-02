import sys
from gevent.socket import socket, SOCK_DGRAM

address = ("127.0.0.1", 1234)
message = "hello from client"
sock = socket(type=SOCK_DGRAM)
sock.connect(address)
print "Sent '%s' to %s:%s" % (message, address[0], address[1])
sock.send(message)
while True:
	data, address = sock.recvfrom(1024*1024)
	print "Received '%s' from %s:%s" % (data, address[0], address[1])
	if data == "exit":
		break

