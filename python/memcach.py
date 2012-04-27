from time import time
from memcache import Client

client = Client(['127.0.0.1:11211'])
client.set("my_key", "val " + str(999))
print client.get("my_key")
n = 100000
start_time = time()
for i in xrange(0, n):
	client.set(str(i), "val " + str(i))
print "set time: %s ms" % ((time()-start_time)*1000)
start_time = time()
for i in xrange(0, n):
	client.get(str(i))
print client.get("555")
print "get time: %s ms" % ((time()-start_time)*1000)
#print client.stats
