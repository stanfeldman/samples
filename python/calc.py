#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
if sys.version_info[0] >= 3:
    raw_input = input
import ply.lex as lex
import ply.yacc as yacc
import os
import re


class Parser(object):
    """
    Base class for a lexer/parser that has the rules defined as methods
    """
    tokens = ()
    precedence = ()

    def __init__(self, **kw):
        self.debug = kw.get('debug', 0)
        self.names = {}
        modname = "_" + self.__class__.__name__ + "_parser"
        self.debugfile = modname + "_dbg"
        self.tabmodule = modname + "_parsetab"
        # Build the lexer and parser
        lex.lex(module=self, debug=self.debug, reflags=re.UNICODE)
        yacc.yacc(module=self,
                  debug=self.debug,
                  debugfile=self.debugfile,
                  tabmodule=self.tabmodule)

    def run(self):
        while 1:
            try:
                s = raw_input('calc > ').decode(sys.stdin.encoding)
            except EOFError:
                break
            if not s: continue     
            yacc.parse(unicode(s))

    
class Calc(Parser):
    tokens = (
        'NAME','NUMBER',
        'PLUS','MINUS','EXP', 'TIMES','DIVIDE','EQUALS',
        'LPAREN','RPAREN',
        )
    # Tokens
    t_PLUS    = ur'\+'
    t_MINUS   = ur'-'
    t_EXP     = ur'\*\*'
    t_TIMES   = ur'\*'
    t_DIVIDE  = ur'/'
    t_EQUALS  = ur'='
    t_LPAREN  = ur'\('
    t_RPAREN  = ur'\)'
    t_NAME    = ur'\w+'

    def t_NUMBER(self, t):
        ur'[0-9]+\.?[0-9]*'
        try:
        	t.value = float(t.value)
        except ValueError:
            print("Float value too large %s" % t.value)
            t.value = 0
        return t

    t_ignore = u" \t"

    def t_newline(self, t):
        ur'\n+'
        t.lexer.lineno += t.value.count("\n")
    
    def t_error(self, t):
        print("Illegal character '%s'" % t.value[0])
        t.lexer.skip(1)

    # Parsing rules
    precedence = (
        ('left','PLUS','MINUS'),
        ('left','TIMES','DIVIDE'),
        ('left', 'EXP'),
        ('right','UMINUS'),
        )

    def p_statement_assign(self, p):
        'statement : NAME EQUALS expression'
        self.names[p[1]] = p[3]

    def p_statement_expr(self, p):
        'statement : expression'
        print(p[1])

    def p_expression_binop(self, p):
        """
        expression : expression PLUS expression
                  | expression MINUS expression
                  | expression TIMES expression
                  | expression DIVIDE expression
                  | expression EXP expression
        """
        if p[2] == u'+'  : p[0] = p[1] + p[3]
        elif p[2] == u'-': p[0] = p[1] - p[3]
        elif p[2] == u'*': p[0] = p[1] * p[3]
        elif p[2] == u'/': p[0] = p[1] / p[3]
        elif p[2] == u'**': p[0] = p[1] ** p[3]

    def p_expression_uminus(self, p):
        'expression : MINUS expression %prec UMINUS'
        p[0] = -p[2]

    def p_expression_group(self, p):
        'expression : LPAREN expression RPAREN'
        p[0] = p[2]

    def p_expression_number(self, p):
        'expression : NUMBER'
        p[0] = p[1]

    def p_expression_name(self, p):
        'expression : NAME'
        try:
            p[0] = self.names[p[1]]
        except LookupError:
            print("Undefined name '%s'" % p[1])
            p[0] = 0

    def p_error(self, p):
        if p:
            print("Syntax error at '%s'" % p.value)
        else:
            print("Syntax error at EOF")


if __name__ == '__main__':
    calc = Calc()
    calc.run()
