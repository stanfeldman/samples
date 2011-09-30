function route(pathname, mapping, res)
{
    var c = mapping[pathname];
    if(typeof mapping[pathname] == "function")
        c(res);
    else 
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("404");
    }
}

exports.route = route;