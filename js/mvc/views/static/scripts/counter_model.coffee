class CounterModel
	constructor: (@value=1) ->
	
	increase: (v) ->
		@value += v

exports = this
exports.CounterModel = CounterModel
				
