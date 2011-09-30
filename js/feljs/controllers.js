var template  = require('node-t');

function view1(res)
{
    var tmpl = template.fromFile(__dirname + "/view1.html");
    var context = { foo: "bar", names: ["Stas", "Boris"], numbers: [] };
    for(var i = 0; i < 10000; ++i)
        context.numbers.push("Некоторое число бла ыловкщцшу цущшко цщушко цукшычс" + i);
    var result = tmpl.render(context);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(result);
}

function view2(res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("view2");
}

exports.view1 = view1;
exports.view2 = view2;