var handlebars = require("./handlebars").handlebars;
console.log("hey");
var source = "hey, {{name}}!";
var template = handlebars.compile(source);
var html = template({name: "stas"});
console.log(html);