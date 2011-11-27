import couchdb, time

client = couchdb.Server()
db = client["test"]
time1 = time.time()
for i in xrange(0, 1):
	doc = {"name": "name " + str(i), "num": i}
	db.save(doc)
time2 = time.time()
print "save time: %s" % (time2-time1)
#print db.get(doc["_id"])["foo"]
#for id in db:
#	print db.get(id)
time1 = time.time()
map_fun = """
function(doc) 
{
	if (doc.num == 20000)
		emit(doc.name, doc);
}
"""
results = db.query(map_fun)
for res in results:
	print res
time2 = time.time()
print "query time: %s" % (time2-time1)

