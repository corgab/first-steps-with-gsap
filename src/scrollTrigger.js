import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimations() {
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
  });

  tl.from('#orange', { xPercent: -100, visibility: 'visible' });
  tl.from('#green', { xPercent: 100, visibility: 'visible' });

  ScrollTrigger.create({
    animation: tl,
    trigger: '.cards-container',
    start: 'top top',
    end: '+=2000',
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  });
}
