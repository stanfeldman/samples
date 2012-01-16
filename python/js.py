from time import time
from jsmin import jsmin

code = r'''
// use native browser JS 1.6 implementation if available
if (Object.isFunction(Array.prototype.forEach))
	Array.prototype._each = Array.prototype.forEach;

if (!Array.prototype.indexOf) Array.prototype.indexOf = function(item, i) {

// hey there
function() {// testing comment
	foo;
	//something something
	location = 'http://foo.com;';   // goodbye
}
//bye
'''
time1 = time()
result = jsmin(code)
time2 = time()
print result
print "time: " + str(time2-time1)
