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
print str_to_bin("a")
cipher1 = "1010110010011110011111101110011001101100111010001111011101101011101000110010011000000101001110111010010111100100111101001010000011000001010001001001010000000010101001000011100100010011011011011011010111010011000101010111111110010011010111001001010101110001111101010000001011110100000000010010111001111010110000001101010010110101100010011111111011101101001011111001101111101111000100100001000111101111011011001011110011000100011111100001000101111000011101110101110010010100010111101111110011011011001101110111011101100110010100010001100011001010100110001000111100011011001000010101100001110011000000001110001011101111010100101110101000100100010111011000001111001110000011111111111110010111111000011011001010010011100011100001011001101110110001011101011101111110100001111011011000110001011111111101110110101101101001011110110010111101000111011001111"
cipher2 = "1011110110100110000001101000010111001000110010000110110001101001111101010000101000110100111010000010011001100100111001101010001001010001000011011001010100001100111011010011111100100101000001001001011001110010010100101011111010001110010010101111110001100010100001110000110001111111001000100001001010100011100100001101010101111000100001111101111110111001000101111111101011001010000100100000001011001001010000101001110101110100001111100001011101100100011000110111110001000100010111110110111010010010011101011111111001011011001010010110100100011001010110110001001000100011011001110111010010010010110100110100000111100001111101111010011000100100110011111011001010101000100000011111010010110111001100011100001111100100110010010001111010111011110110001000111101010110101001110111001110111010011111111010100111000100111001011000111101111101100111011001111"
symbols = [' ','a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
			'A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
result = ""
for symbol in symbols:
	for i in xrange(len(cipher1)/7 - 7):
		if str_to_bin(symbol) == cipher1[i:i+7]:
			result += symbol
print result
#with open("words.txt", "r") as dict_f:
#	dictionary = [word.strip() for word in dict_f.readlines()]
#	for word in dictionary:
#		print "trying %s" % word
#		key = xor(str_to_bin(word), cipher1)
#		message2 = bin_to_str(xor(cipher2, key))
#		if message2 in dictionary:
#			print message2