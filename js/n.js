var http = require("http");

http.createServer(function(req, res)
{
	res.writeHead(200, {"content-type": "text/html"});
	res.end("<h1>hello!</h1>");
}).listen(1337);
