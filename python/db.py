import time, psycopg2

driver_map = {
	"postgres": psycopg2
}

type_map = {
	"postgres": {
		"id":  "bigserial not null",
		"string": "character varying"
	},
	"mysql": {
		"id": "bigint not null auto_increment",
		"string": "varchar(50)"
	}
}

time1 = time.time()
db_type = "postgres"
print db_type
driver = driver_map[db_type]
conn = None
if db_type == "postgres":
	conn = driver.connect(host='localhost', database='test', user='postgres', password='postgres')
elif db_type == "mysql":
	conn = driver.connect(host='localhost', db='test', user='root', passwd='root')
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
		id %s,
		title %s,
		body %s,
		primary key(id)
	)
""" % (type_map[db_type]["id"], type_map[db_type]["string"], type_map[db_type]["string"])
cursor.execute(query)
conn.commit()
time2 = time.time()
print "create time: %s" % (time2-time1)

time1 = time.time()
for i in xrange(0, 1):
	query = "insert into documents(title, body) values(%s, %s)"
	cursor.execute(query, ["title %s" % i, "body %s" % i])
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

time1 = time.time()
query = "delete from documents"
cursor.execute(query)
conn.commit()
time2 = time.time()
print "delete time: %s" % (time2-time1)

cursor.close()
conn.close()
