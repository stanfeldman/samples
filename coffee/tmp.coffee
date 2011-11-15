swig  = require 'swig'
swig.init {root: __dirname}
html_minifier = require "html-minifier"
dust = require 'dust.js'
fs = require "fs"

min_options =
	removeComments: true
	collapseBooleanAttributes: true
	removeCDATASectionsFromCDATA: true
	collapseWhitespace: true
	removeAttributeQuotes: true
	removeEmptyAttributes: true
context = { pagename: 'awesome people', authors: ['Paul', 'Jim', 'Jane'] }

console.time "swig"
swig_tmpl = swig.compileFile 'swig.html'
html_minifier.minify (swig_tmpl.render context), min_options
console.timeEnd "swig"

console.time "dust"
data = fs.readFileSync __dirname+'/dust.html', 'utf-8'
dust.renderSource data, context, (err, out) ->
	console.timeEnd "dust"

