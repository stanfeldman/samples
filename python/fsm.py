from time import time

edges = { (1,"a"): 2, (2,"a"): 2, (2,"1"): 3, (3,"1"):3 }
accepting = [3]

def fsmsim(input, current, edges, accepting):
	if not input:
		return current in accepting
	else:
		letter = input[0]
		#for k, v in edges.items():
		#	if k[1] == letter:
		#		return fsmsim(input[1:], v, edges, accepting)
		if (current, letter) in edges:
			return fsmsim(input[1:], edges[(current, letter)], edges, accepting)
		return False

#start_time = time()
#print fsmsim("aaa111", 1, edges, accepting)
#print "time: %s ms" % ((time()-start_time)*1000)

edges = { (1, 'a') : [2, 3],
          (2, 'a') : [2],
          (3, 'b') : [4, 3],
          (4, 'c') : [5] }
accepting = [2, 5]

def nfsmsim(string, current, edges, accepting):
	if not string:
		return current in accepting
	else:
		letter = string[0]
		if (current, letter) in edges:
			nexts = edges[(current, letter)]
			if not isinstance(nexts, list):
				return fsmsim(input[1:], nexts, edges, accepting)
			else:
				for next in nexts:
					result = nfsmsim(string[1:], next, edges, accepting)
					if result:
						return result
		return False

print "Test case 1 passed: " + str(nfsmsim("abc", 1, edges, accepting) == True) 
print "Test case 2 passed: " + str(nfsmsim("aaa", 1, edges, accepting) == True) 
print "Test case 3 passed: " + str(nfsmsim("abbbc", 1, edges, accepting) == True) 
print "Test case 4 passed: " + str(nfsmsim("aabc", 1, edges, accepting) == False) 
print "Test case 5 passed: " + str(nfsmsim("", 1, edges, accepting) == False) 
