var nodes = [];
var GRID_SIZE = 10;
var RADIUS = 5;

function createNodes(pattern) {
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    if (pattern === 'grid') {
        for (var x = -GRID_SIZE; x <= GRID_SIZE; x += 2) {
            for (var z = -GRID_SIZE; z <= GRID_SIZE; z += 2) {
                var geometry = new THREE.SphereGeometry(0.5, 32, 32);
                var node = new THREE.Mesh(geometry, material);
                node.position.set(x, 0, z);
                nodes.push(node);
                scene.add(node);
            }
        }
    } else if (pattern === 'radial') {
        for (var i = 0; i < 10; i++) {
            var angle = (i / 10) * Math.PI * 2;
            var x = Math.cos(angle) * RADIUS;
            var z = Math.sin(angle) * RADIUS;

            var geometry = new THREE.SphereGeometry(0.5, 32, 32);
            var node = new THREE.Mesh(geometry, material);
            node.position.set(x, 0, z);
            nodes.push(node);
            scene.add(node);
        }
    }
}

function clearNodes() {
    while (nodes.length > 0) {
        var node = nodes.pop();
        scene.remove(node);
    }
}
