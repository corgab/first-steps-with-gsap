import { gsap } from 'gsap';

const tl = gsap.timeline({
  delay: 0.5,
  defaults: { ease: 'power3.out', duration: 1 },
});

tl.from('#title', {
  x: -100,
  autoAlpha: 0,
});

tl.from('#subtitle', {
  x: 100,
  autoAlpha: 0,
  duration: 0.5,
});

tl.from('#guy', {
  y: 100,
  autoAlpha: 0,
  duration: 1.5,
  rotate: 360,
});

tl.pause();

document.getElementById('play').addEventListener('click', () => {
  const btn = document.getElementById('play');

  // Se l'animazione è finita restartala
  if (tl.progress() === 1) {
    tl.restart(true);
  } else {
    // Altrimenti avvia
    tl.play();
  }

  setTimeout(() => {
    btn.innerHTML = "Te l'avevo detto...";
  }, tl.duration() + '500'); // Secondi di delay
});
