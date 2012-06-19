from models.auth import User, UserAccount


class DbHelper(object):
	def application_after_load(self, application):
		User.drop_table(fail_silently=True)
		User.create_table()
		UserAccount.drop_table(fail_silently=True)
		UserAccount.create_table()
		print "app loaded"
