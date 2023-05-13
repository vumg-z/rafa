// overlayAnimations.js

// Define the overlay color and canvas here so that it can be accessed in the showOverlayAndAnimate function
const overlayCanvas = document.getElementById('overlayCanvas');
const overlayCtx = overlayCanvas.getContext('2d');
const overlayColor = '#F8D038'; // Cambia el color según lo desees

function showOverlayAndAnimate(transitionDuration, animationCallback) {
    //... existing code ...
}

// Add event listeners
document.getElementById('inicio').addEventListener('click', () => {
    overlayCanvas.style.display = "block";
    showOverlayAndAnimate(500, () => { // Cambiar la duración de la animación a 500 ms
        rotateCamera(positions.inicio);
    });
});

document.getElementById('acerca-de').addEventListener('click', () => {
    overlayCanvas.style.display = "block";
    showOverlayAndAnimate(500, () => {
        rotateCamera(positions.acercaDe);
    });
});

document.getElementById('servicios').addEventListener('click', () => {
    overlayCanvas.style.display = "block";
    showOverlayAndAnimate(500, () => {
        rotateCamera(positions.servicios);
    });
});

document.getElementById('contacto').addEventListener('click', () => {
    overlayCanvas.style.display = "block";
    showOverlayAndAnimate(500, () => {
        rotateCamera(positions.contacto);
    });
});

// export { showOverlayAndAnimate };
