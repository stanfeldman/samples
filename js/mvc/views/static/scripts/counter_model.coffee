class CounterModel
	constructor: (@value=1) ->
	
	sync: ->
		for k, v of this when typeof v isnt "function"
			console.log "k: #{k}, v: #{v}"

exports = this
exports.CounterModel = CounterModel
				
