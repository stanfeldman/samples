request = require "request"
url = require "url"
fs = require "fs"
zombie = require "zombie"
String::endsWith = (str) -> if @match(new RegExp "#{str}$") then true else false

args = process.argv.splice 2
address = "http://37signals.com/podcast"
folder = "/media/feldman_hd/audio/37/"
if args[0]
	address = args[0]
if args[1]
	folder = args[1]
browser = new zombie({ debug: false, loadCSS: false })
browser.visit "http://37signals.com/podcast", =>
	for item in browser.queryAll "a"
		link = item.getAttribute("href")
		if link.endsWith ".mp3"
			console.log link
			filename = url.parse(link).pathname
			filename = filename.substring(filename.lastIndexOf("/")+1)
			request(link).pipe(fs.createWriteStream(folder + filename))
