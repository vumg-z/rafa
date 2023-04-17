// Seleccionamos los paths que queremos animar
const paths = document.querySelectorAll("path");

// Creamos una nueva animación con GSAP
const tl = gsap.timeline({ repeat: -1, yoyo: true });

// Ocultamos todos los paths al principio de la animación
tl.set(paths, { opacity: 0 });

// Añadimos una animación para cada path
paths.forEach((path, index) => {
  tl.to(path, { opacity: 1, duration: 0.5 }, index * 0.5); // Hacemos aparecer cada path con un delay progresivo
  tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "power1.out" }, index * 0.5); // Animamos el trazo del path para que se dibuje
});

// Reproducimos la animación
tl.play();
