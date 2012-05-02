$(document).ready(function()
{
	document.addEventListener("deviceready", on_device_ready, true);
});

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

function on_device_ready()
{
	var renderer = new THREE.CanvasRenderer();
            renderer.setSize( 800, 600 );
            document.body.appendChild( renderer.domElement );

            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera(
                                            35,             // Field of view
                                            800 / 600,      // Aspect ratio
                                            0.1,            // Near plane
                                            10000           // Far plane
                                        );
            camera.position.set( -15, 10, 10 );
            camera.lookAt( scene.position );

            scene.add( camera );

            var cube = new THREE.Mesh(
                                    new THREE.CubeGeometry( 5, 5, 5 ),
                                    new THREE.MeshLambertMaterial( { color: 0xFF0000 } )
                                );
            scene.add( cube );

            var light = new THREE.PointLight( 0xFFFF00 );
            light.position.set( 10, 0, 10 );
            scene.add( light );

            renderer.render( scene, camera );
}

function on_device_ready2()
{
	//navigator.notification.alert("hi");
	var canvas = document.getElementById("my_canvas");
	if(!canvas || !canvas.getContext)
		return;
	var context = canvas.getContext("2d");
	(function animloop(){
		draw(context);
		requestAnimationFrame(animloop, context);
	})();
};

function draw(context)
{
	context.fillStyle = "#ffffaa";
	context.fillRect(0, 0, 500, 300);
	context.fillStyle = "#000000";
	context.font = "20px _sans";
	context.fillText("hello world", 195, 80);
	var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 96 + 128;
    var y = Math.cos( time * 0.9 ) * 96 + 128;
    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}

