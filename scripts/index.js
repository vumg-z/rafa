/*  text animation */
const tls = gsap.timeline({defaults: {ease:'sine.out'}});

/* enter animation */

var enter = document.getElementById('introP');

// Iniciar la animación automáticamente después de 3 segundos
setTimeout(() => {
  enterSite();
}, 3000);

enter.addEventListener('click',enterSite, false);

function enterSite(){
 
  tls.to('#introImage', {y:"100%",duration:.6, stagger:0.25});
  tls.to('.intro',{y:"100%",duration:.6,stagger:0.25}); 
  tls.to('#textPage',{y:"0%",duration:.6,stagger:0.25}); 
}
