var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Mouse coordinates display
window.addEventListener('mousemove', function(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Node interaction: clicking on a node
window.addEventListener('click', function(event) {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(nodes);

    if (intersects.length > 0) {
        var intersectedNode = intersects[0].object;
        intersectedNode.material.color.set(0xff0000); // Change color on click
    }
});

// Keyboard interaction for switching layouts
document.addEventListener('keydown', function(event) {
    if (event.key === 'g') {
        clearNodes();
        createNodes('grid');
    } else if (event.key === 'r') {
        clearNodes();
        createNodes('radial');
    }
});
