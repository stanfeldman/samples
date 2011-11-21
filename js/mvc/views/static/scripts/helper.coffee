class Helper
	@instance: undefined
	
	constructor: ->
		if Helper.instance isnt undefined
			return Helper.instance
		Helper.instance = this
	
	guid: ->
		S4 = ->
			(((1+Math.random())*0x10000)|0).toString(16).substring(1)
		S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()
		
exports = this
exports.Helper = Helper
