import sys
from pyjaco import Compiler
from time import time
from jsmin import jsmin

time1 = time()
code = open("tojs.py", "r")
compiler = Compiler()
compiler.append_string(code.read())
js = jsmin(str(compiler))
time2 = time()
print js
print "time: " + str(time2-time1)
