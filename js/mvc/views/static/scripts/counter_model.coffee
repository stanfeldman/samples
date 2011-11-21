require ["/scripts/bony/model.c.js"], ->
	class CounterModel extends bony.Model
		constructor: (@value=1) ->

	exports = this
	exports.CounterModel = CounterModel
				
