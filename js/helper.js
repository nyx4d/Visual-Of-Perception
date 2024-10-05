// Update mouse coordinates in the DOM
function updateMouseCoords() {
    var mouseCoordsElement = document.getElementById('mouseCoords');
    mouseCoordsElement.innerHTML = `X: ${mouse.x.toFixed(2)}, Y: ${mouse.y.toFixed(2)}`;
}

// Update the scene volume in the DOM
function updateSceneVolume() {
    var sceneVolumeElement = document.getElementById('sceneVolume');
    var volume = (window.innerWidth * window.innerHeight * camera.position.z).toFixed(2);
    sceneVolumeElement.innerHTML = `${volume} px³`;
}
