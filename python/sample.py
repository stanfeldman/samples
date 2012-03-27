class My(object):
	def __getattr__(self, name):
		self.callable_name = name
		return self
	
	def __call__(self, *args, **kwargs):
		print "__call__ / name: %s / args: %s / kwargs: %s" % (self.callable_name, args, kwargs)
	
m = My()
m.func("lala", z=1)
