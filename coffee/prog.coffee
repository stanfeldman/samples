console.log "hello from coffee"
square = (x) ->
	a = 1
	x*x + 1
console.log square 4
ul = ->
	console.log "lala ul!" 
ul()

cond1 = false
cond2 = 1 > 0
if cond1 or cond2
	console.log "hurray!"

gold = silver = rest = "unk"
func1 = (first, second, others...) ->
	gold = first
	silver = second
	rest = others
func1 "g", "s", "o1", "o2"
console.log gold
console.log silver
console.log rest

arr = ["el1", "el2", "lala", "zzz"]
console.log el for el in arr
console.log i*2 for i in [10..1] when i > 5
console.log (el for el in [0..10])[1..4]

class Animal
	constructor: (@name) ->	
	move: (meters) ->
		console.log @name + " moved #{meters}m"
class Snake extends Animal
	move: ->
		console.log "slithering..."
		super 5
class Horse extends Animal
	move: ->
		console.log "galloping..."
		super 45
sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palantino"
sam.move()
tom.move()

weather = (location) ->
	[location, 33, "Sunny"]
[city, t, forecast] = weather "Moscow"
console.log forecast
[open, contents..., close] = "impossible".split ""
console.log contents

day = "mon"
switch day
	when "mon"
		console.log "Monday!"
	when "tue"
		console.log "Tuesday!"
	else
		console.log "nothing"

coffeescript = require "coffee-script"
console.log coffeescript.compile """
x = 3
console.log x+5
"""

ck = require 'coffeekup'
dust = require 'dust'
console.time("dust")
compiled = dust.compile "<h2>name: {name}</h2><h3>{foo}</h3>", "tmpl"
dust.loadSource compiled
dust.render "tmpl", {name: "stas"}, (err, out) =>
	console.timeEnd "dust"
	console.log out
console.time("coffeekup")
htm = ck.render "h1 'Or strings. I am not too picky.'"
console.timeEnd("coffeekup")
console.time("dust2")
dust.loadSource compiled
dust.render "tmpl", {name: "stas"}, (err, out) =>
	console.timeEnd "dust2"
	console.log out

console.log htm

