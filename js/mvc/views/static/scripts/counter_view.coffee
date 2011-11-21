require ["/scripts/bony/view.c.js"], ->
	class CounterButtonView extends bony.View
		init: (opts) =>
			@controller.bind "update", @on_update
		
		render: (model)->
			model ?= @controller.read()
			elm = $("<button class='#{@id}'>#{model.value}</button>")
			elm.click =>
				@controller.update {"value": model.value + 1}
			return elm
		
		on_update: (event, model) =>
			$("button.#{@id}").replaceWith =>
				@render(model)
			
	exports = this
	exports.CounterButtonView = CounterButtonView
