from time import time
from lexer import Lexer

start_time = time()
webpage = "This is <b>my</b> webpage!"
tokens_spec = [
	("langleslash", r"</"),
	("langle", r"<"),
	("rangle", r">"),
	("string", r'\"[^"]*\"'),
	("word", r"[^ <>]+")
]
lexer = Lexer(tokens_spec)
print lexer.tokens(webpage)
print "time: %s ms" % ((time()-start_time)*1000)
