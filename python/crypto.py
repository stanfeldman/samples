from Crypto.Cipher import AES

key = "my super secret!"
plaintext = "hi vasya z osaji"
encoder = AES.new(key, AES.MODE_ECB)
ciphertext = encoder.encrypt(plaintext)
print ciphertext.encode("hex")
decoder = AES.new(key, AES.MODE_ECB)
plaintext2 = decoder.decrypt(ciphertext)
print plaintext == plaintext2
