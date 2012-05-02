var World = Class.$extend(
{
	__init__: function()
	{
		window.requestAnimationFrame = (function()
		{
			return  window.requestAnimationFrame   || 
				window.webkitRequestAnimationFrame || 
				window.mozRequestAnimationFrame    || 
				window.oRequestAnimationFrame      || 
				window.msRequestAnimationFrame     || 
				function(callback, element){
					window.setTimeout(callback, 1000 / 60);
				};
		})();
		window.three = THREE;
	},
	
	draw: function()
	{
		var renderer = new three.CanvasRenderer({antialias: true});
		var width = 800;
		var height = 600;
		renderer.setSize(width, height);
		document.body.appendChild(renderer.domElement);
		renderer.setClearColorHex(0xEEEEEE, 1.0);
		renderer.clear();
		renderer.shadowMapEnable = true;
		var scene = new three.Scene();
		var fov = 45; // camera field-of-view in degrees
		var aspect = width / height; // view aspect ratio
		var near = 1; // near clip plane
		var far = 10000; // far clip plane
		var camera = new three.PerspectiveCamera(fov, aspect, near, far);
		//camera.position.set(-15,10,15);
		//camera.lookAt(scene.position);
		scene.add(camera);
		var cube = new three.Mesh(new three.CubeGeometry(50,50,50), new three.MeshLambertMaterial({color: 0x3366FF}));
		cube.position.y = 50;
		cube.castShadow = true;
		cube.receiveShadow = true;
		scene.add(cube);
		var light = new three.PointLight(0xFFFF00);
		light.position.set(170,330,-160);
		light.castShadow = true;
		scene.add(light);
		renderer.render(scene, camera);
		var animate = function(t)
		{
			camera.position.x = Math.sin(t/1000)*300;
		    camera.position.z = 150;
		    camera.position.y = Math.cos(t/1000)*300;
		    renderer.clear();
			camera.lookAt(scene.position);
			renderer.render(scene, camera);
			requestAnimationFrame(animate, renderer.domElement);
		};
		animate(new Date().getTime());
	}
});

window.onload = function()
{
	world = new World();
	world.draw();
}

