from jinja2.ext import Extension
from jinja2 import nodes
from jinja2 import Markup

class Simple(Extension):
	tags = set(["simple"])
	
	def parse(self, parser):
		stream = parser.stream
		tag_token = stream.next()
		arg_token = stream.next()
		arg = nodes.Const(arg_token.value, lineno=arg_token.lineno)
		return nodes.Output([self.call_method('_render', [arg])]).set_lineno(tag_token.lineno)

	def _render(self, arg):
		return Markup("<h1>Simple tag with arg: %s</h1>" % arg)
