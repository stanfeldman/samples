import riak
import time

time1 = time.time()
#client = riak.RiakClient()
client = riak.RiakClient(port=8087, transport_class=riak.RiakPbcTransport)
bucket = client.bucket("test")
for i in xrange(0, 1):
	person = bucket.new("riak_developer_" + str(i), data={
		"name": "dev name " + str(i),
		"age": i,
		"company": "47bits"
	})
	person.store()
dev = bucket.get("riak_developer_1")
print dev.get_data()
time2 = time.time()
print "time: %s" % (time2-time1)
