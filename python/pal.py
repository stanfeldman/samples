import math

def is_pal(num):
	s = str(num)
	div = int(math.ceil(len(s)/2))
	p1 = s[0 : div]
	p2 = s[div : ][::-1]
	return p1 == p2

def is_three(num):
	return 3 == len(str(num))

def get_threes():
	return list(reversed(xrange(100, 999)))
	
def get_pal():
	large = 0
	for x in get_threes():
		for y in get_threes():
			res = x*y
			if is_pal(res) and res > large:
				large = res
	return large
	
print get_pal()
