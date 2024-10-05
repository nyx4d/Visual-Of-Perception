function updateMouseCoords() {
    var mouseCoordsElement = document.getElementById('mouseCoords');
    var xPixels = ((mouse.x + 1) / 2 * window.innerWidth).toFixed(2);
    var yPixels = ((-mouse.y + 1) / 2 * window.innerHeight).toFixed(2);
    mouseCoordsElement.innerHTML = `X: ${xPixels}px, Y: ${yPixels}px`;
}


function updateSceneVolume() {
    var sceneVolumeElement = document.getElementById('sceneVolume');
    var cameraZ = camera.position.z.toFixed(2);
    var volume = (window.innerWidth * window.innerHeight * cameraZ).toFixed(2);
    sceneVolumeElement.innerHTML = `${volume} px³ (Camera Z: ${cameraZ})`;
}
