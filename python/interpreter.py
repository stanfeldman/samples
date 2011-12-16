# -*- coding: utf-8 -*-
from ply.lex import lex
from ply.yacc import yacc
from abc import ABCMeta, abstractproperty
import re
import sys

class Parser(object):
	"""
	Абстрактный парсер, нужно наследоваться и определить tokens, t_* и p_*
	"""
	__metaclass__ = ABCMeta
	
	def __init__(self):
		self.modname = "_" + self.__class__.__name__ + "_parser"
		self.tabmodule = self.modname + "_table"
		self.lex = lex(module=self, reflags=re.UNICODE)
		self.yacc = yacc(module=self, tabmodule=self.tabmodule)
	
	@abstractproperty
	def tokens(self):
		pass
	
	def t_error(self, t):
		print "Неправильный символ %s" % t
		t.lexer.skip(1)
		
	def parse(self, input):
		self.yacc.parse(input)
		
class Interpreter(Parser):
	def __init__(self):
		super(Interpreter, self).__init__()
		self.names = {}
		
	"""
	Лексический анализатор
	Нужно определить названия токенов tokens,
	согласно этим названия определить регулярные выражения, соответсвующие токенам t_*
	"""
	
	tokens = (
		"name",
		"assign",
		"number",
		"plus",
		"minus",
		"mult",
		"div",
		"lparen",
		"rparen",
		"newline",
		"print",
		"if",
		"then",
		"else",
		"lt",
		"gt",
		"eq",
		"string",
		"def",
		"colon",
		"return",
		"space",
		"comma",
		"indent",
		"dedent",
	)
	
	t_name = ur"\w+"
	t_assign = ur"="
	t_plus = ur"\+"
	t_minus = ur"-"
	t_mult = ur"\*"
	t_div = ur"/"
	t_lparen = ur"\("
	t_rparen = ur"\)"
	t_print = ur"print"
	t_if = ur"if"
	t_then = ur"then"
	t_else = ur"else"
	t_lt = ur"<"
	t_gt = ur">"
	t_eq = ur"=="
	t_string = ur'".*?"'
	t_def = ur"def"
	t_colon = ur":"
	t_return = ur"return"
	t_comma = ur","
	
	def t_comment(self, t):
		r"[ ]*\043[^\n]*"  # \043 is '#'
		pass
		
	def t_space(self, t):
		r' [ ]+ '
		#if t.lexer.at_line_start:
		#return t
		
	def t_newline(self, t):
		ur"\n+"
		t.lexer.lineno += len(t.value)
		t.type = "newline"
		
	def t_number(self, t):
		ur'[0-9]+\.?[0-9]*'
		try:
			t.value = int(t.value)
		except:
			t.value = float(t.value)
		return t
		
	"""
	Синтаксический анализатор
	"""
	def p_program(self, p):
		"""program	:	program newline
					|	program statement
					|	newline
					|	statement"""
		pass
	
	def p_statement_condition(self, p):
		"""statement	:	condition_statement
						|	exp_statement"""
		pass
						
	def p_condition(self, p):
		"condition_statement : if expression then statement"
		#if p[2]:
		#	p[0] = 555
		pass
			
	def p_exp_statement_assign(self, p):
		"exp_statement : name assign expression"
		self.names[p[1]] = p[3]
	
	def p_exp_statement_print(self, p):
		"exp_statement : print lparen expression rparen"
		print p[3]
		
	def p_statement(self, p):
		"exp_statement : expression"
		
	def p_expression_plus(self, p):
		"expression : expression plus term"
		p[0] = p[1] + p[3]
		
	def p_expression_minus(self, p):
		"expression : expression minus term"
		p[0] = p[1] - p[3]
		
	def p_expression_term(self, p):
		"expression : term"
		p[0] = p[1]
		
	def p_term_mult(self, p):
		"term : term mult factor"
		p[0] = p[1] * p[3]
		
	def p_term_div(self, p):
		"term : term div factor"
		p[0] = p[1] / p[3]
		
	def p_term_lt(self, p):
		"term : term lt factor"
		p[0] = p[1] < p[3]
		
	def p_term_gt(self, p):
		"term : term gt factor"
		p[0] = p[1] > p[3]
		
	def p_term_eq(self, p):
		"term : term eq factor"
		p[0] = p[1] == p[3]
	
	def p_term_factor(self, p):
		"term : factor"
		p[0] = p[1]
		
	def p_factor_name(self, p):
		"factor : name"
		try:
			p[0] = self.names[p[1]]
		except:
			print u"Неизвестная переменная %s" % p[1]
			p[0] = 0
	
	def p_factor_number(self, p):
		"factor : number"
		p[0] = p[1]
		
	def p_factor_string(self, p):
		"factor : string"
		p[0] = p[1][1:-1]
		
	def p_factor_expression(self, p):
		"factor : lparen expression rparen"
		p[0] = p[2]
		
	def p_error(self, p):
		print u"Неверный синтаксис %s" % p
	
	def run(self, code):
		self.parse(unicode(code.strip()))

if __name__ == "__main__":
	code = open(sys.argv[1]).read()
	i = Interpreter()
	i.run(code)
	
