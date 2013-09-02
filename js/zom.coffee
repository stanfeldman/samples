zombie = require "zombie"

browser = new zombie({ debug: false, loadCSS: false })
browser.visit "http://md2.dpru.ru/moslicenseReestr/", =>
	# browser.clickLink 'td[colspan=11] a:first', ->
	# 	browser.html()
	browser.fill "TextBox1", "2"
	browser.pressButton "Перейти", ->
		browser.html()
#browser.visit "http://localhost:1337/", =>
#	console.log browser.html()
