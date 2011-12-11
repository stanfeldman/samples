from unittest import TestCase


class Class1(object):
	def __init__(self, num):
		self.num = num
		
	def add(self, num2):
		self.num += num2
		return self.num
		
class Class1TestCase1(TestCase):
	def test_add(self):
		obj = Class1(5)
		obj.add(6)
		self.assertEqual(obj.num, 11)

