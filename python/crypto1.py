import binascii

def str_to_bin(s):
	return bin(int(binascii.hexlify(s), 16))[2:]
	
def bin_to_str(s):
	n = int("0b"+s, 2)
	return binascii.unhexlify('%x' % n)
	
def xor(s1_b, s2_b):
	if len(s1_b) > len(s2_b):
		s2_b += "0"*(len(s1_b) - len(s2_b))
	else:
		s1_b += "0"*(len(s2_b) - len(s1_b))
	res = ""
	for i in xrange(len(s1_b)):
		res += str(int(s1_b[i]) ^ int(s2_b[i]))
	return res
	
def encode(message, key):
	return xor(str_to_bin(message), str_to_bin(key))
	
def decode(cipher, key):
	return bin_to_str(xor(cipher, str_to_bin(key)))
	
message = "hello, stas!"
key = "secret"
cipher = encode(message, key)
message2 = decode(cipher, key)
print message == message2
