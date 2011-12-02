import time, psycopg2

time1 = time.time()
conn = psycopg2.connect(host='localhost', database='test', user='postgres', password='postgres')
cursor = conn.cursor()
time2 = time.time()
print "connect time: %s" % (time2-time1)

time1 = time.time()
query = "drop table if exists documents"
cursor.execute(query)
conn.commit()
time2 = time.time()
print "drop time: %s" % (time2-time1)

time1 = time.time()
query = """
	create table documents
	(
		id bigserial not null,
		title character varying,
		body character varying,
		constraint documents_id primary key(id)
	)
"""
cursor.execute(query)
conn.commit()
time2 = time.time()
print "create time: %s" % (time2-time1)

time1 = time.time()
for i in xrange(0, 1):
	query = "insert into documents(title, body) values(%s, %s)"
	cursor.execute(query, ("title %s" % i, "body %s" % i))
conn.commit()
time2 = time.time()
print "insert time: %s" % (time2-time1)

time1 = time.time()
query = "select * from documents"
cursor.execute(query)
len(list(cursor))
#for row in cursor:
#	pass#print row
time2 = time.time()
print "select time: %s" % (time2-time1)

cursor.close()
conn.close()
