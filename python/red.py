import redis
import time

time1 = time.time()
client = redis.Redis(host="localhost", port=6379, db=0)
#for i in xrange(0, 10000):
#	client.set(i, "val " + str(i))
print client.get(999)
time2 = time.time()
print "time: %s" % (time2-time1)
print client.info()["used_memory_human"]
