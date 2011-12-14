from mocker import Mocker

mocker = Mocker()
obj = mocker.mock()
obj.hello()
mocker.result("hi")
with mocker:
	print obj.hello()
