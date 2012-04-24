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
		old_start_i = 0
		while i < len(string):
			stream += string[i]
			for (tag, regex) in self.tokens_spec:
				new_found = regex.findall(stream)
				#print stream, tag, new_found, not found_regex, self.tokens_spec.index((tag, regex))
				if len(new_found) > 0:
					#matches = []
					if not found_regex:
						found_regex = regex
						start_i += stream.find(new_found[0])
						found_token = (tag, new_found[0], start_i, start_i+len(new_found[0])-1)
						#matches.append(found_token)
						continue
					else:
						curr_regex_index = len(self.tokens_spec)
						for cri, (t,r) in enumerate(self.tokens_spec):
							if t == found_token[0]:
								curr_regex_index = cri
								break
						if curr_regex_index < self.tokens_spec.index((tag, regex)):
							new_found = found_regex.findall(stream)
						else:
							found_regex = regex
							start_i = old_start_i
							start_i += stream.find(new_found[0])
							found_token = (tag, new_found[0], start_i, start_i+len(new_found[0])-1)
						if len(new_found) > 1 or i == len(string)-1:
							#print found_token
							result.append(found_token)
							i = found_token[3]
							start_i = i+1
							old_start_i = start_i
							stream = ""
							found_token = None
							found_regex = None
						else:
							found_token = (found_token[0], new_found[0], found_token[2], start_i+len(new_found[0])-1)
					#print matches
			i += 1
		return result

			
