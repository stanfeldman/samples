zombie = require "zombie"

browser = new zombie({ debug: false, loadCSS: false })
browser.visit "https://www.google.ru/", =>
	browser.fill "q", "node.js"
	browser.pressButton "Поиск в Google", ->
		console.log "--#{browser.text 'title'}--"
		for item in browser.queryAll "h3.r a"
			console.log item.innerHTML
