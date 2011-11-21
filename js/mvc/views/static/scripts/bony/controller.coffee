class Controller
	constructor: (opts) ->
		@model = opts.model
		@observers = {}
		
	read: () ->
		@model.read()
	
	update: (attrs) ->
		@model.update(attrs)
		@notify("update", @model)
		
	bind: (event, action) ->
		@observers[event] ?= []
		@observers[event].push(action)
		
	unbind: (action) ->
		#@observers.remove observer
		
	notify: (event, model)->
		a(event, model) for a in @observers[event]
			
		
exports = this
exports.bony ?= {}
exports.bony.Controller = Controller
