from models.auth import Consumer, User, ConsumerUser
from hashlib import sha256
from uuid import uuid4


class DbHelper(object):
	def application_after_load(self, application):
		Consumer.drop_table(fail_silently=True)
		Consumer.create_table()
		User.drop_table(fail_silently=True)
		User.create_table()
		ConsumerUser.drop_table(fail_silently=True)
		ConsumerUser.create_table()
		user1 = User.create(username="stas", password=self.hash_password("s"))
		user2 = User.create(username="boris", password=self.hash_password("b"))
		consumer1 = Consumer.create(name="app1", client_id="1", client_secret=str(uuid4()), access_token="a1")
		consumer2 = Consumer.create(name="app2", client_id="2", client_secret="secret2", redirect_uri="http://localhost:8080/auth_usage/end")
		consumer3 = Consumer.create(name="app3", client_id="3", client_secret="secret3")
		ConsumerUser.create(consumer=consumer1, user=user1)
		print "app loaded"
		
	def hash_password(self, password):
		password_salt = "3gt34fdg68f"
		return sha256(password + password_salt).hexdigest()
