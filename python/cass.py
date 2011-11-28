import time, pycassa, cql

con = cql.connect('localhost', '9160', 'MyKeyspace')
cursor = con.cursor()
#cursor.execute("insert into Users(key, name, surname, age) values ('boris', 'Borya', 'Borisov', 23) ")
cursor.execute("select surname, name from Users where name = 'Borya'")
for row in cursor:
	print row
cursor.close()
con.close()

#time1 = time.time()
#conn = pycassa.ConnectionPool("MyKeyspace")
#time2 = time.time()
#print "connection time: %s" % (time2-time1)
#cf = pycassa.ColumnFamily(conn, "Users")
#time1 = time.time()
#for i in range(0, 100):
#	cf.insert("user %s" % i, {"name": "User %s name" % i, "surname": "User %s surname" % i})
#time2 = time.time()
#print "save time: %s" % (time2-time1)

#time1 = time.time()
#print cf.get("user 0")
#time2 = time.time()
#print "get time: %s" % (time2-time1)
#print len(list(cf.get_range()))

