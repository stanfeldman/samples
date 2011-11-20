var http = require("http");
var cluster = require("cluster");
var cpus_number = require("os").cpus().length;

if(cluster.isMaster)
{
	for(var i = 0; i < cpus_number; ++i)
	{
		console.log(cluster.fork());
	}	
}
else
{
	http.createServer(function(req, res)
	{
		res.writeHead(200, {"content-type": "text/html"});
		res.end("<h1>hello!</h1>");
	}).listen(1337);
}
