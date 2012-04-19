window.requestAnimationFrame = (function()
{
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(callback, element){
                window.setTimeout(callback, 1000 / 60);
              };
})();

window.onload = function()
{
	var canvas = document.createElement("canvas");
	if(!canvas || !canvas.getContext)
		return;
	canvas.width = 500;
	canvas.height = 500;
	document.body.appendChild( canvas );
	var context = canvas.getContext("2d");
	var img = new Image();
	img.src = "img.png";
	img.onload = function()
	{
		context.img = img;
		(function animloop(){
		  draw(context);
		  requestAnimationFrame(animloop, context);
		})();
	};
};

function draw(context)
{
	context.fillStyle = "#ffffaa";
	context.fillRect(0, 0, 500, 300);
	context.fillStyle = "#000000";
	context.font = "20px _sans";
	context.fillText("hello world", 195, 80);
	context.drawImage(context.img, 50, 80);
	var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 96 + 128;
    var y = Math.cos( time * 0.9 ) * 96 + 128;
    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}

