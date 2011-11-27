from pymongo import Connection
import time

connection = Connection()
db = connection.test
collection = db.test_collection
time1 = time.time()
for i in range(0,1):
	doc = {
		"name": "person %s" % i,
		"age": i,
		"tags": ["python", "js"]
	}
	collection.insert(doc)
time2 = time.time()
print "save time: %s" % (time2-time1)
time1 = time.time()
for doc in collection.find({"age":{"$lt": 2}}):
	pass#print doc
time2 = time.time()
print "query time: %s" % (time2-time1)
print collection.find().count()
