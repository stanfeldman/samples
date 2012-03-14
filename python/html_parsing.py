from urllib2 import urlopen
from time import time
from lxml import html

def show_results(results):
	for result in results:
		print result.text_content()

start_time = time()
doc = html.document_fromstring(urlopen("http://habrahabr.ru/").read())
print "html loading: %s milliseconds" % ((time()-start_time)*1000)
start_time = time()
results_from_css = doc.cssselect("a.post_title")
print "search via css celectors: %s milliseconds" % ((time()-start_time)*1000)
#show_results(results_from_css)
start_time = time()
results_from_xpath = doc.xpath("//a[@class='post_title']")
print "search via xpath: %s milliseconds" % ((time()-start_time)*1000)
#show_results(results_from_xpath)
