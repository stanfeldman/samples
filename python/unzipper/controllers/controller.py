from kiss.views.templates import TemplateResponse
import os
from zipfile import *
		
class Controller(object):
	def __init__(self):
		self.tmp_file_path = './tmp_file.zip'
		
	def get(self, request):
		return TemplateResponse("view.html")
	
	def post(self, request):
		file_input = request.env["wsgi.input"]
		data = file_input.read(-1)
		print len(data)
		with open("./test.zip", 'r') as orig_file:
			print len(orig_file.read())
		with open(self.tmp_file_path, 'wb') as tmp_file:
			tmp_file.write(data)
			with ZipFile(self.tmp_file_path, "r") as myzip:
				for item in myzip.namelist():
					print item
			#os.remove(self.tmp_file_path)
		return TemplateResponse("view.html")
