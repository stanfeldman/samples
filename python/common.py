d1 = {
	"a": 55,
	"b1": 77,
	"c1": {
		"x": 55,
		"c2": 11
	}
}
d2 = {
	"a": 56,
	"b2": 88,
	"c1": {
		"c2": 22
	}
}

def merge(d1, d2):
	for k1,v1 in d1.iteritems():
		if not k1 in d2:
			d2[k1] = v1
		elif isinstance(v1, dict):
			merge(v1, d2[k1])
	return d2
print merge(d1,d2)
