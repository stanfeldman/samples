from Crypto.Cipher import AES
key = "my super secret!"
plaintext = "hi vasya z osaji"
encoder = AES.new(key, AES.MODE_ECB)
ciphertext = encoder.encrypt(plaintext)
decoder = AES.new(key, AES.MODE_ECB)
plaintext2 = decoder.decrypt(ciphertext)
print "symmetric crypto: ", plaintext == plaintext2

from Crypto.Hash import SHA256
hash_function = SHA256.new()
hash_function.update(plaintext)
h1 = hash_function.hexdigest()
hash_function = SHA256.new()
hash_function.update("hi vasya z osaji")
h2 = hash_function.hexdigest()
print "hash: ", h1 == h2

from Crypto.PublicKey import RSA
private_key = RSA.generate(1024)
public_key = private_key.publickey()
ciphertext = public_key.encrypt(plaintext, "random str")
print "assymetric crypto: ", plaintext == private_key.decrypt(ciphertext)
