//// init ////
var scene = new THREE.Scene();									// create scene - container for objects(meshes)
	
var light = new THREE.PointLight(0xFF9999, 1, 100);			// create point light and add it on scene
light.position.set( 20, 20, 20 );
scene.add( light );
	
var geometry = new THREE.BoxGeometry( 3, 3, 3 );				// create simple box
var material = new THREE.MeshPhongMaterial( { 					// create material
		color: 0x0000FF,
		specular: 0xFFFFFF
	} );

var cube = new THREE.Mesh( geometry, material );				// create mesh from geometry and material and add it on scene
scene.add( cube );												
	
var camera = new THREE.PerspectiveCamera( 						// create perspective camera	
		75, 
		window.innerWidth / window.innerHeight, 
		0.1, 
		1000 
	);
camera.position.z = 5;											// move camera back a bit

	
var renderer = new THREE.WebGLRenderer();						// create renderer - by default canvas will be created 
renderer.setSize( window.innerWidth, window.innerHeight );	
document.body.appendChild( renderer.domElement );				// add canvas to body
	


//// render ////	
var animate = function () {										// render loop (idealy 60fps)
	requestAnimationFrame( animate );
	
	cube.rotation.x += 0.003;									// transform object in local space
	cube.rotation.y += 0.003;
	
	renderer.render(scene, camera);								// call render method per frame
};
	
animate();														// initiate loop
