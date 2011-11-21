class CounterController
	constructor: (opts) ->
		@model = opts.model
		@observers = {}
		
	get: (attr) ->
		@model[attr]
	
	set: (attr, value) ->
		old = @model[attr]
		@model[attr] = value
		@notify("change", {event: "change", key: attr, old_value: old, new_value: value})
		@model.sync()
		
	bind: (event, action) ->
		@observers[event] = action
		
	unbind: (action) ->
		#@observers.remove observer
		
	notify: (event, params)->
		@observers[event](params)
			
		
exports = this
exports.CounterController = CounterController
