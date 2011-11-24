from java.util.zip import *
from java.io import *
from org.python.modules import *
from jarray import array
from java.lang import *

class Compressor(object):
	def compress(self, s, charset):
		buffer = ByteArrayOutputStream()
		deflater = GZIPOutputStream(buffer)
		deflater.write(String.getBytes(s, charset))
		deflater.close()
		return buffer.toByteArray()
	
	def decompress(self, data, charset):
		buffer = ByteArrayOutputStream()
		ins = ByteArrayInputStream(data)
		inflater = GZIPInputStream(ins)
		bbuf = jarray.zeros(256, 'b')
		while True:
			r = inflater.read(bbuf)
			if r < 0:
				break
			buffer.write(bbuf, 0, r)
		return String(buffer.toByteArray(), charset)

compressor = Compressor()	
compressed = compressor.compress("hello)", "UTF-8")
print compressed
decompressed = compressor.decompress(compressed, "UTF-8")
print decompressed
