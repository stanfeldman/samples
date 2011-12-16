from abc import ABCMeta, abstractmethod

class Visitor(object):
	def visit(self, node, *args, **kwargs):
		method = None
		for cls in node.__class__.__mro__:
			method = getattr(self, "visit_" + cls.__name__)
			if method:
				break
		if not method:
			method = self.generic_visit
		return method(node, *args, **kwargs)
	
	def visit_NameNode(self, node):
		print "NameVisitor: %s" % node.value
		
	def visit_NumberNode(self, node):
		print "NumberNode: %s" % node.value
		
class Node(object):
	__metaclass__ = ABCMeta
	
	@abstractmethod
	def accept(self, visitor):
		pass
		
class NameNode(object):
	__metaclass__ = ABCMeta
	
	def __init__(self, value):
		self.value = value
	
	def accept(self, visitor):
		visitor.visit(self)
		
class NumberNode(object):
	__metaclass__ = ABCMeta
	
	def __init__(self, value):
		self.value = value
	
	def accept(self, visitor):
		visitor.visit(self)
		
v = Visitor()
nn = NameNode("lala")
nmn = NumberNode(555)
nn.accept(v)
nmn.accept(v)
