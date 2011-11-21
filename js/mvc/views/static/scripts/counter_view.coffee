require ["/scripts/helper.c.js"], ->
class CounterView
	constructor: (opts) ->
		@helper = new Helper()
		@id = @helper.guid()
		@controller = opts.controller
		@controller.bind "change", @on_change
		
	render: ->
		elm = $("<button class='#{@id}'>#{@controller.get "value"}</button>")
		elm.click =>
			@controller.set "value", 1+@controller.get "value"
		return elm
		
	on_change: (params) =>
		console.log params
		$("button.#{@id}").replaceWith =>
			@render()
			
exports = this
exports.CounterView = CounterView
