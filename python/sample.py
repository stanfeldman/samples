class My(object):
	def __getattr__(self, name):
		self.callable_name = name
		return self
	
	def __call__(self, *args, **kwargs):
		print "__call__ / name: %s / args: %s / kwargs: %s" % (self.callable_name, args, kwargs)
	
m = My()
m.func("lala", z=1)
s = set()
s.add(4)
s.add(2)
s.add(6)
class Cl(object):
	def __init__(self, num):
		self.num = num
		
	def __repr__(self):
		return "Cl: %s" % self.num
		
	def __lt__(self, other):
		return self.num < other.num
		
	def __gt__(self, other):
		return self.num > other.num
		
s2 = set()
s2.add(Cl(4))
s2.add(Cl(2))
s2.add(Cl(6))
print sorted(s2)
