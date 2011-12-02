from abc import ABCMeta, abstractmethod

class Adapter(object):
	__metaclass__ = ABCMeta
	
	@abstractmethod
	def save(self, model):
		pass
	
	@abstractmethod
	def remove(self, model):
		pass
		
	@abstractmethod
	def find(self, conditions):
		pass
	
class Manager(Adapter):
	def __init__(self, **options):
		self.adapter_class = options["adapter"]
		self.adapter = self.adapter_class(options)
		
	def save(self, model):
		pass
	
	def remove(self, model):
		pass
		
	def find(self, conditions):
		pass
		
