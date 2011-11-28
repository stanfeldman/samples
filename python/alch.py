import time
from sqlalchemy import *

time1 = time.time()
engine = create_engine("postgres://uni:uni@192.168.1.249/uni_cache_test")
conn = engine.connect()
time2 = time.time()
print "connect time: %s" % (time2-time1)

time1 = time.time()
for i in xrange(0, 1):
	query = "insert into db_documents(db_title, db_body) values('%s', '%s')" % ("title %s" % i, "body %s" % i)
	conn.execute(query)
time2 = time.time()
print "insert time: %s" % (time2-time1)

time1 = time.time()
query = "select * from db_documents"
result = conn.execute(query)
print len(list(result))
#for row in cursor:
#	pass#print row
time2 = time.time()
print "select time: %s" % (time2-time1)

conn.close()
