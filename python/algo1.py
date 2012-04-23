from time import time

def merge_arrays(arr1, arr2):
	l1 = len(arr1)
	l2 = len(arr2)
	length = l1 if l1 > l2 else l2
	result = []
	i1 = 0
	i2 = 0
	while i1 < l1 or i2 < l2:
		if i1 >= l1 and i2 < l2:
			result.append(arr2[i2])
			i2 += 1
		elif i2 >= l2 and i1 < l1:
			result.append(arr1[i1])
			i1 += 1
		else:
			el1 = arr1[i1]
			el2 = arr2[i2]
			if el1 < el2:
				result.append(el1)
				i1 += 1
			else:
				result.append(el2)
				i2 += 1
	return result
	
def merge_sort(arr):
	length = len(arr)
	if length <= 1:
		return arr
	split = length/2
	left_part = merge_sort(arr[0:split])
	right_part = merge_sort(arr[split:length])
	return merge_arrays(left_part, right_part)
	
def selection_sort(arr):
	if len(arr) <= 1:
		return arr
	for i in xrange(0, len(arr)):
		min_i = i
		for j in xrange(i+1, len(arr)):
			if arr[j] < arr[i]:
				min_i = j
		if min_i != i:
			arr[i], arr[min_i] = arr[min_i], arr[i]
	return arr
	
	
arr = range(1000)
arr.reverse()
start_time = time()
selection_sort(arr)
print "selection_sort time: %s ms" % ((time()-start_time)*1000)
start_time = time()
merge_sort(arr)
print "merge_sort time: %s ms" % ((time()-start_time)*1000)
start_time = time()
arr.sort()
print "standart sort time: %s ms" % ((time()-start_time)*1000)
