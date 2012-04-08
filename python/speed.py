from time import time

start_time = time()
n = 0
for i in range(0,1000000):
	n = i
print "prog duration: %s ms" % (1000*(time()-start_time))
