from time import time
from lexer import Lexer

webpage = '<h1>this is<a href="lala">my</a>page 9 la</h1>'
tokens_spec = [
	("left_angle_slash", r"</"),
	("left_angle", r"<"),
	("right_angle", r">"),
	("word", r"[^</>]+")
]
lexer = Lexer(tokens_spec)
start_time = time()
print webpage
print lexer.tokens(webpage)
print "time: %s ms" % ((time()-start_time)*1000)

