import sys
from pyjaco import Compiler

code = open("tojs.py", "r")
compiler = Compiler()
compiler.append_string(code.read())
print str(compiler)
