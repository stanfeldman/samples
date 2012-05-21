from sys import path
path.append("/home/stanislavfeldman/projects/python/putils/")
from putils.aop import Aspect
		
		
class MyAspect(Aspect):
	def on_enter(self, call):
		print "on enter: ", call.args
		
	def on_success(self, call):
		print "on success: ", call.result
		
	def on_fail(self, call):
		print "on fail: ", call.exception

	
@MyAspect()
class MyClass(object):
	def __init__(self):
		self.var = 5
	def m1(self, n):
		n+1
	def m2(self, n):
		return n+1
	def m3(self, n):
		raise ValueError("error!")

		
@MyAspect()
def func(x):
	return x+1

		
mc = MyClass()
mc.m1(5)
mc.m2(6)
mc.m3(7)
func(555)
