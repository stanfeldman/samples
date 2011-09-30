var http = require('http');
var url = require("url")
var router = require("./router");

function start(mapping)
{
    function on_request(req, res)
    {
        var pathname = url.parse(req.url).pathname;
        router.route(pathname, mapping, res);
    };
    var server = http.createServer(on_request);
    server.listen(1337, "127.0.0.1");
    console.log("Сервер запущен на http://127.0.0.1:1337/");
}

exports.start = start;
