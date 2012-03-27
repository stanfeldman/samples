var http = require("http");

http.createServer(function(req, res)
{
	res.writeHead(200, {"content-type": "text/html"});
	res.write(req.connection.remoteAddress);
	console.log(req.connection.remoteAddress);
	res.end();
}).listen(1337, "0.0.0.0");
