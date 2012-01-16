http = require "http"

server = http.createServer (req, res) ->
	res.writeHead 200, {"content-type": "text/html"}
	res.end "<h1>hello</h1>"
server.listen 1337, "localhost"
