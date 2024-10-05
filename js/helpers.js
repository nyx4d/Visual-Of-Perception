// Update mouse coordinates in the DOM, including the Z coordinate
function updateMouseCoords() {
    var mouseCoordsElement = document.getElementById('mouseCoords');
    mouseCoordsElement.innerHTML = `X: ${intersectionPoint.x.toFixed(2)}, Y: ${intersectionPoint.y.toFixed(2)}, Z: ${intersectionPoint.z.toFixed(2)}`;
}

// Update the scene volume in the DOM
function updateSceneVolume() {
    var sceneVolumeElement = document.getElementById('sceneVolume');
    var volume = (window.innerWidth * window.innerHeight * camera.position.z).toFixed(2);
    sceneVolumeElement.innerHTML = `${volume} px³`;
}
