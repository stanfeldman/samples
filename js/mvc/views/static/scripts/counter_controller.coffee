class CounterController
	constructor: (opts) ->
		@model = opts.model
		@observers = []
		
	value: () ->
		@model.value
	
	increase: (v) ->
		@model.increase v
		@notify_observers()
		
	notify_observers: ->
		o.notify(this) for o in @observers
		
exports = this
exports.CounterController = CounterController
