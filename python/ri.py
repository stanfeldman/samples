import riak
import time

client = riak.RiakClient(port=8087, transport_class=riak.RiakPbcTransport)
bucket = client.bucket("test")
time1 = time.time()
for i in xrange(0, 100):
	person = bucket.new("riak_developer_" + str(i), data={
		"name": "dev name " + str(i),
		"age": i,
		"company": "47bits"
	})
	person.store()
time2 = time.time()
print "save time: %s" % (time2-time1)
time1 = time.time()
dev = bucket.get("riak_developer_2")
#print dev.get_data()
time2 = time.time()
print "key query time: %s" % (time2-time1)
time1 = time.time()
query = client.add('test')
query.map("function(v) { var data = JSON.parse(v.values[0].data); if(data.age == 3) { return [[v.key, data]]; } return []; }")
query.reduce("function(values) { return values.sort(); }")
for result in query.run():
	pass#print "%s - %s" % (result[0], result[1])
time2 = time.time()
print "query time: %s" % (time2-time1)
