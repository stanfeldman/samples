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
		start_i = 0
		while i < len(string) or found_token:
			if i >= len(string) and found_token:
				result.append(found_token)
				break
			stream += string[i]
			if found_regex:
				#print "%s, %s, %s" % (stream, found_token[1], i)
				new_found = found_regex.findall(stream)
				if len(new_found) > 1 or i == len(string)-1:
					#print found_token
					result.append(found_token)
					i = found_token[3]
					start_i = i+1
					stream = ""
					found_token = None
					found_regex = None
				else:
					found_token = (found_token[0], new_found[0], found_token[2], start_i+len(new_found[0])-1)
			else:
				for (tag, regex) in self.tokens_spec:
					new_found = regex.findall(stream)
					print stream, tag, new_found
					if len(new_found) > 0:
						#matches = []
						if not found_regex:
							found_regex = regex
							start_i += stream.find(new_found[0])
							found_token = (tag, new_found[0], start_i, start_i+len(new_found[0])-1)
							#matches.append(found_token)
							break
						#print matches
			i += 1
		return result

			
