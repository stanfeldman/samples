import time, psycopg2

time1 = time.time()
conn = psycopg2.connect("host='192.168.1.249' dbname='uni_cache_test' user='uni' password='uni'")
cursor = conn.cursor()
time2 = time.time()
print "connect time: %s" % (time2-time1)

time1 = time.time()
for i in xrange(0, 1):
	query = "insert into db_documents(db_title, db_body) values('%s', '%s')" % ("title %s" % i, "body %s" % i)
	cursor.execute(query)
conn.commit()
time2 = time.time()
print "insert time: %s" % (time2-time1)

time1 = time.time()
query = "select * from db_documents"
cursor.execute(query)
print len(list(cursor))
#for row in cursor:
#	pass#print row
time2 = time.time()
print "select time: %s" % (time2-time1)

cursor.close()
conn.close()
