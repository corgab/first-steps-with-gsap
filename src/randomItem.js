import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export function setupRandomItems() {
  const circles = document.querySelectorAll('.circle');
  gsap.fromTo(
    circles,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      y: -30,
      delay: 0.5,
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
      repeatDelay: 1,
      ease: 'power1.in ',
      scrollTrigger: {
        toggleActions: 'play none resume none',
        trigger: circles,
        // markers: true,
        start: 'center bottom',
        end: 'center center',
      },
    }
  );
}
