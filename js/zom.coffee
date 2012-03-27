zombie = require "./zombie"

proxy = { host: "karaburma-milsped-fe0.mediaworksit.net", port: 6666 }
browser = new zombie({ proxy: proxy, debug: true, loadCSS: false })
browser.visit "https://www.google.ru/", =>
	browser.fill "q", "node.js"
	browser.pressButton "Поиск в Google", ->
		console.log "--#{browser.text 'title'}--"
		for item in browser.queryAll "h3.r a"
			console.log item.innerHTML
#browser.visit "http://localhost:1337/", =>
#	console.log browser.html()
