// Selecciona los elementos SVG por sus identificadores
const c = document.getElementById('c');
const r = document.getElementById('r');
const e1 = document.getElementById('e1');
const a = document.getElementById('a');
const r2 = document.getElementById('r2');
const e2 = document.getElementById('e2');
const d = document.getElementById('d');

// Crea una nueva línea de tiempo de GSAP
const tl = gsap.timeline({ delay: 1 });

// Agrega animaciones para cada letra a la línea de tiempo
tl.fromTo(c, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(r, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(e1, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(a, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(r2, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(e2, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' })
  .fromTo(d, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0, ease: 'linear' });
