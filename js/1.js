console.log("hi");
var x = 7;
function sum(a, b) 
{
	console.log(arguments);
	console.log(arguments.callee); 
	return a+b; 
}
console.log(sum(3, 5));
function fac(num)
{
	if(num <= 1)
		return 1;
	else
		return num * fac(num-1);
}
console.log(fac(99));
var calc = {
	op1: 555,
	op2: 5,
	sum: function() { return this.op1 + this.op2; }
}
console.log(calc.sum());
console.log(calc.sum.call({op1: 4, op2:7}));
function get_func(x)
{
	var y = 0;
	y += x;
	return function() { return y; }
}
console.log(get_func(1)());
console.log(get_func(2)());
uid = (function()
{
	var id = 0;
	return function() { return id++; }
})();
console.log(uid());
console.log(uid());

function Rect(w, h)
{
	this.w = w;
	this.h = h;
}
Rect.prototype.area = function() { return this.w*this.h; }

r = new Rect(5,6);
console.log(r.area());
console.log(r.hasOwnProperty("area"));

function PosRect(x, y, w, h)
{
	Rect.call(this, w, h);
	this.x = x;
	this.y = y;
}
PosRect.prototype = new Rect();
delete PosRect.prototype.w;
delete PosRect.prototype.h;
PosRect.prototype.constructor = PosRect;
PosRect.prototype.contains = function(x, y)
{
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h);
}

pr = new PosRect(2, 2, 4, 4);
console.log(pr.contains(3,3));
console.log(pr.area());
console.log(Object.prototype.toString.apply(pr));
