import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function scrollAnimations() {
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
  });

  tl.from('#orange', { xPercent: -100, visibility: 'visible' });
  tl.from('#green', { xPercent: 100, visibility: 'visible' });

  ScrollTrigger.create({
    animation: tl,
    trigger: '.cards-container',
    start: 'top top',
    end: () => '+=' + window.innerHeight,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  });
}

export function runnerAnimation() {
  const text = document.querySelector('#scroll-text');
  const textWidth = text.scrollWidth;
  console.log(textWidth);

  gsap.to('#scroll-text', {
    x: `-${textWidth}px`,
    duration: 5,
    ease: 'linear',
    scrollTrigger: {
      trigger: '#runner-container',
      scrub: 1,
      // markers: true,
      start: 'top center',
      end: `+=${textWidth}`,
      pin: true,
    },
  });
}
