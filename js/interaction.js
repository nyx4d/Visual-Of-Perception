var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var intersectionPoint = new THREE.Vector3();  // For storing the intersection point

// Plane to intersect with for mouse position (a plane at Z=0)
var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

// Mouse coordinates display
window.addEventListener('mousemove', function(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update Z-coordinate by raycasting to a plane
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, intersectionPoint);

    updateMouseCoords();  // Update X, Y, Z in the DOM
});

// Node interaction: clicking on a node
window.addEventListener('click', function(event) {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(nodes);

    if (intersects.length > 0) {
        var intersectedNode = intersects[0].object;
        intersectedNode.material.color.set(0xff0000);  // Change color on click
    }
});
