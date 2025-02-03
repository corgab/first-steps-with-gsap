import { gsap } from 'gsap';

export function hero() {
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
}
