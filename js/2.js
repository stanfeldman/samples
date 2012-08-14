function defineClass(cl_def)
{
	var superclass = cl_def.superclass || Object;
	var prototype = new superclass();
	for(p in prototype)
		if(prototype.hasOwnProperty(p)) delete prototype[p];
	var constructor = cl_def.constructor || function(){};
	prototype.constructor = constructor;
	prototype.superclass = superclass;
	for(method in cl_def)
		if(method != "constructor" && method != "superclass")
			prototype[method] = cl_def[method];
	constructor.prototype = prototype;
	return constructor;
}

Fruit = defineClass
({
	constructor: function(w)
	{
		this.w = w;
	},
	get_weight: function() { return this.w; }
});
Apple = defineClass
({
	superclass: Fruit,
	constructor: function(w, c)
	{
		Fruit.call(this, w);
		this.c = c;
	},
	get_wc: function() { return this.w * this.c; }
});
f = new Fruit(5);
console.log(f.get_weight());
a = new Apple(5, 6);
console.log(a.get_weight());
console.log(a.get_wc());
