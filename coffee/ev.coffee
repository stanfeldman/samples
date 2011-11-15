eventemitter2 = require("eventemitter2")
eventer = new eventemitter2.EventEmitter2({wildcard: true})
class MyClass
	on_ev: (p) ->
		console.log p
obj = new MyClass()
eventer.on "foo", obj.on_ev
eventer.emit "foo", "hello!"
