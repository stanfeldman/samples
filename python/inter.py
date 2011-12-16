class Lexer(object):
	def __init__(self, code):
		self.keywords = set(["while", "endwhile", "if", "else", "endif", "print", "=", "==", "!=", "+", "-"])
		self.symbol_table = {}
		self.chunks = code.split()
		
	def next_token(self, token_type=""):
		token = ("", "", 0)
		if len(self.chunks) > 0:
			chunk = self.chunks.pop(0)
			if token_type and chunk[0] != token_type:
				print "Unexpected token: %s" % chunk[0]
				return token
			if chunk in self.keywords:
				token = (chunk, "", 0)
			elif chunk.isdigit():
				token = ("digit", "", int(chunk))
			elif chunk.isalnum():
				self.symbol_table[chunk] = 0
				token = ("label", chunk, 0)
			else:
				print "Syntax error: %s" % chunk
		return token
	
class Parser(object):
	def __init__(self, code):
		self.lexer = Lexer(code)
		self.token = self.lexer.next_token()
		
	def parse(self):
		tree = []
		while self.token[0] in ["while", "if", "print", "label"]:
			statement = []
			if self.token[0] == "print":
				statement.append("print")
				statement.append(self.parse_expression())
			elif self.token[0] == "label":
				label = self.token[1]
				self.token = self.lexer.next_token("=")
				statement.append("=")
				statement.append(self.parse_expression())
			tree.append(statement)
		return tree
		
	def parse_expression(self):
		term = self.parse_term()
		expr = term
		while self.token[0] in ["+", "-"]:
			exp = [token[0]]
			self.lexer.next_token()
			exp.append(term)
			exp.append(self.parse_expression())
		return expr
		
	def parse_term(self):
		ret = []
		if self.token[0] == "label":
			ret.append(self.token[1])
		elif self.token[0] == "digit":
			ret.append(self.token[2])
		return ret
	
class Interpreter(object):	
	def run(self, code):
		parser = Parser(code)
		print parser.parse()
	
interpreter = Interpreter()
code = open("script2.fel", "r").read()
interpreter.run(code)

