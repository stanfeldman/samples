class CounterView
	constructor: (opts) ->
		@id = Math.floor Math.random()*10000
		@controller = opts.controller
		@controller.observers.push this
		
	render: ->
		elm = $("<button class='#{@id}'>#{@controller.value()}</button>")
		elm.click =>
			@controller.increase(1)
		return elm
		
	notify: ->
		$("button.#{@id}").replaceWith =>
			@render()
			
exports = this
exports.CounterView = CounterView
