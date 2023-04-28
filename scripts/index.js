const element = document.querySelector('#principal');
element.classList.add('opacity-0', 'translate-x-[-100%]');

const firstElements = document.querySelectorAll('.first');
firstElements.forEach(el => el.classList.add('opacity-0'));

setTimeout(() => {
  const tl = gsap.timeline({ delay: 1 });

  tl.to(element, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
  });

  tl.to(firstElements, {
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    stagger: 0
  });

}, 3000);
