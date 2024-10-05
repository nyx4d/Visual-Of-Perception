var scene, camera, renderer, controls;

function init() {
    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Orbit Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Lighting
    var light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 50, 50);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0x404040); // Soft lighting
    scene.add(ambientLight);

    // Start animation loop
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

    updateMouseCoords();
    updateSceneVolume();
}

// Responsive window resizing
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

init();
