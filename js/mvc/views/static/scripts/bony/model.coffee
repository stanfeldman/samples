class Model
	create: -> #/counters/ post
	
	read: -> #/counters/:id/ get
		return this
	
	update: (attrs)-> #/counters/:id/ put
		for k, v of attrs
			this[k] = v
	
	del: -> #/counters/:id/ delete
	
	attrs: ->
		attrs = {}
		for k, v of this when typeof v isnt "function"
			attrs[k] = v
		return attrs

exports = this
exports.bony ?= {}
exports.bony.Model = Model
				
