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
		
	t_ignore = " \t"
	
	def t_error(self, t):
		print "Неправильный символ %s" % t.value
		t.lexer.skip(1)
		
	def parse(self, input):
		self.yacc.parse(input)
		
class FelParser(Parser):
	def __init__(self):
		super(FelParser, self).__init__()
		self.variables = {}
		
	"""
	Лексический анализатор
	Нужно определить названия токенов tokens,
	согласно этим названия определить регулярные выражения, соответсвующие токенам t_*
	"""
	
	tokens = (
		"variable",
		"eq",
		"number",
		"plus",
		"minus",
		"times",
		"div",
		"lparen",
		"rparen",
		"newline"
	)
	
	t_variable = ur"\w+"
	t_eq = ur"="
	t_plus = ur"\+"
	t_minus = ur"-"
	t_times = ur"\*"
	t_div = ur"/"
	t_lparen = ur"\("
	t_rparen = ur"\)"
		
	def t_number(self, t):
		ur"\d+"
		t.value = int(t.value)
		return t
	
	def t_newline(self, t):
		ur"\n+"
		
	"""
	Синтаксический анализатор
	БНФ:
	statement	:	variable eq expression 
				|	expression
	expression	:	expression plus term
				|	expression minus term
				|	term
	term		:	term times factor
				|	term div factor
				|	factor
	factor		:	variable
				|	number
				|	lparen expression rparen
	"""
		
	def p_statement_eq(self, p):
		"statement : variable eq expression"
		self.variables[p[1]] = p[3]
		
	def p_statement_expression(self, p):
		"""statement	:	expression
						|	newline"""
		print p[1]
		
	def p_expression_plus(self, p):
		"expression : expression plus term"
		p[0] = p[1] + p[3]
		
	def p_expression_minus(self, p):
		"expression : expression minus term"
		p[0] = p[1] - p[3]
		
	def p_expression_term(self, p):
		"expression : term"
		p[0] = p[1]
		
	def p_term_times(self, p):
		"term : term times factor"
		p[0] = p[1] * p[3]
		
	def p_term_div(self, p):
		"term : term div factor"
		p[0] = p[1] / p[3]
	
	def p_term_factor(self, p):
		"term : factor"
		p[0] = p[1]
		
	def p_factor_variable(self, p):
		"factor : variable"
		try:
			p[0] = self.variables[p[1]]
		except:
			print "Неизвестная переменная %s" % p[1]
			p[0] = 0
	
	def p_factor_number(self, p):
		"factor : number"
		p[0] = p[1]
		
	def p_factor_expression(self, p):
		"factor : lparen expression rparen"
		p[0] = p[2]
		
	def p_error(self, p):
		print "Неверный синаксис %s" % p
	
	def parse(self, input):
		super(FelParser, self).parse(unicode(input.strip()))

if __name__ == "__main__":
	code = open(sys.argv[1], "r").read()
	#print code
	calc = FelParser()
	calc.parse(code)
	
