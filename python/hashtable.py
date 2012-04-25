from time import time
from hash_functions import *

class HashTable(object):
	def __init__(self):
		self.size = 100
		self.hashtable = [[]]*self.size
		
	def add(self, key, value):
		ind = self.hsh(key)
		existed = self.hashtable[ind]
		inserted = (key,value)
		existed.append(inserted)
		
	def get(self, key):
		ind = self.hsh(key)
		found = self.hashtable[ind]
		for (k,v) in found:
			if k == key:
				return v
		return None
		
	def hsh(self, string):
		res = 0
		for ch in string:
			res = ord(ch) + (res << 5) + (res >> 2)
		return res % self.size
		
ht = HashTable()
ht.add("lala", 23)
ht.add("zzz", 1234)
ht.add("rrrrrr", 23455)
print ht.get("lala")
print ht.get("zzz")
for i in xrange(1000):
	ht.add(str(i), i)
start_time = time()
print ht.get("555")
print "hashtable time: %s ms" % ((time()-start_time)*1000)
#dct = {"lala": 555, "zzz": 1234, "rrrrrr": 23455}
#start_time = time()
#print dct["zzz"]
#print "dict time: %s ms" % ((time()-start_time)*1000)
#start_time = time()
#print ht.hsh("helloworld"*100)
#print "hash time: %s ms" % ((time()-start_time)*1000)
#start_time = time()
#print JSHash("helloworld"*100) % ht.size
#print "hash time: %s ms" % ((time()-start_time)*1000)

