import nltk
from time import time
from urllib2 import urlopen

raw = """
The Project Gutenberg EBook of Crime and Punishment, by Fyodor Dostoevsky
This eBook is for the use of anyone anywhere at no cost and with
almost no restrictions whatsoever.  You may copy it, give it away or
re-use it under the terms of the Project Gutenberg License included, price
"""
tokens = nltk.word_tokenize(raw)
text = nltk.Text(tokens)
print text.collocations()
print text.concordance("give")
print text.similar("cost")

def edit_distance(a, b):
	n, m = len(a), len(b)
	if n > m:
		a, b = b, a
		n, m = m, n
	prev_row = xrange(m+1)
	for i, c1 in enumerate(a):
		curr_row = [i+1]
		for j, c2 in enumerate(b):
			i = prev_row[j+1]+1
			d = curr_row[j]+1
			s = prev_row[j] + (c1 != c2)
			curr_row.append(min(i, d, s))
		prev_row = curr_row
	return prev_row[n]

start_time = time()
print nltk.metrics.edit_distance("Levenshtein", "Lenvinsten")
print "nltk edit_distance: %s ms" % ((time()-start_time)*1000)
start_time = time()
print edit_distance("Levenshtein", "Lenvinsten")
print "my edit_distance: %s ms" % ((time()-start_time)*1000)
