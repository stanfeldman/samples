from models import Adapter

class PostgresAdapter(Adapter):
	def __init__(self, options):
		print "connect"
		
	def save(self, model):
		print "save"
	
	def remove(self, model):
		print "remove"
		
	def find(self, conditions):
		print "find"
		
	def connect(self, options):
		print "connect"
		
	def __del__(self):
		print "disconnect"
