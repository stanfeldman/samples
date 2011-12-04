class Tag(object):
	def __init__(self, name=None):
		self.name = name
		self.attrs = {}
		self.children = []
		self.content = ""
		
	def __getattr__(self, name):
		return Tag(name)
		
	def __getitem__(self, children):
		if isinstance(children, tuple):
			self.children.extend(children)
		else:
			self.children.append(children)
		return self
		
	def __call__(self, content="", **kwargs):
		self.content = content
		self.attrs = kwargs
		return self
		
	def __str__(self):
		result = "<" + self.name
		for attr_name, attr in self.attrs.iteritems():
			result += " %s='%s'" % (attr_name, attr)
		result += ">"
		content = ""
		for child in self.children:
			content += "%s" % child
		else:
			content += self.content
		result += content
		result += "</%s>" % self.name
		return result
	
if __name__ == "__main__":
	H = Tag()
	html = H.html[
		H.body[
			H.p("lala p1", id=44, zz="skfj"),
			H.br()
		]
	]
	print html
