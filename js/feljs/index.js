require.paths.push('/usr/lib/node_modules');

var server = require("./server");
var controllers = require("./controllers");

var mapping = 
{
    "/": controllers.view1,
    "/1": controllers.view1,
    "/2": controllers.view2
};
server.start(mapping);
