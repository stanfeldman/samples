from time import time
from lexer2 import Lexer

webpage = "<h1>this is<a>my</a>page</h1>"
tokens_spec = [
	("start_tag", r"<[^/]+?>"),
	("close_tag", r"</[^/]+?>"),
	("word", r"[^ </>]+")
]
lexer = Lexer(tokens_spec)
start_time = time()
print lexer.tokens(webpage)
print "time: %s ms" % ((time()-start_time)*1000)

