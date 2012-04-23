import re

class Lexer(object):
	def __init__(self, tokens_spec):
		self.tokens_spec = []
		for (tag, regex) in tokens_spec:
			self.tokens_spec.append((tag, re.compile(regex)))
	def tokens(self, string):
		result = []
		stream = ""
		found_token = None
		found_regex = None
		i = 0
		while i < len(string):
			stream += string[i]
			if found_regex:
				print "%s, %s, %s" % (stream, found_token, i)
				new_found = found_regex.findall(stream)
				if len(new_found) > 1:
					print "!!!%s" % found_token
					result.append(found_token)
					i -= len(stream) - len(found_token)
					stream = ""
					found_token = None
					found_regex = None
				else:
					found_token = new_found[0]
			else:
				for (tag, regex) in self.tokens_spec:
					if regex.findall(stream):
						if not found_regex:
							found_regex = regex
							found_token = stream
							break
			i += 1
		return result
			
