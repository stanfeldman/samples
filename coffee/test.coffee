vows = require "vows"
assert = require "assert"

options =
	reporter = require('/usr/lib/node_modules/kiss.js/node_modules/vows/lib/vows/reporters/spec');

test = vows.describe "Devision by zero"
test.addBatch
	"when dividing number by zero":
		topic: -> 42/0
		"we get infinity": (topic) ->
			assert.equal topic, Infinity
	"but when zero by zero":
		topic: -> 0/0
		"we get NaN": (topic) ->
			assert.isNaN topic
test.export module
