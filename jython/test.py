import sys, os
exec_filepath = os.path.realpath(__file__)
exec_dirpath = exec_filepath[0:len(exec_filepath)-len(os.path.basename(__file__))]
print exec_dirpath
sys.path.append("/home/stanislavfeldman/projects/samples/jython/groovy.jar")
sys.path.append("/home/stanislavfeldman/projects/samples/jython/compressor.jar")
sys.path.append("/home/stanislavfeldman/glassfish-3.1.1/glassfish/modules/javax.jms.jar")
print sys.path
from javax.jms import QueueConnectionFactory, Queue, Session, BytesMessage
from javax.naming import InitialContext
from compressor import Gzip
print "hello"
def func(num):
	print num + 5
func(6)
