// Selecciona los elementos SVG por sus identificadores
const r2 = document.getElementById('r2');
const e2 = document.getElementById('e2');
const d = document.getElementById('d');

// Crea una nueva línea de tiempo de GSAP
const tl = gsap.timeline({ delay: 1 });

// Agrega animaciones para los elementos 'r2', 'e2' y 'd' con una duración más rápida
tl.fromTo(r2, { opacity: 0, y: -20 }, { duration: 0.2, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(e2, { opacity: 0, y: -20 }, { duration: 0.2, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(d, { opacity: 0, y: -20 }, { duration: 0.2, opacity: 1, y: 0, ease: 'linear' });
