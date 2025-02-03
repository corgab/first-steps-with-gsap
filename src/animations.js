import { gsap } from 'gsap';

export function textScrollAnimation() {
  const texts = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'ipsum',
    'dolor',
    'sit',
  ];

  const container = document.getElementById('moving-text-container');

  texts.forEach((text) => {
    // Nuova card
    const card = document.createElement('div');
    card.classList.add('movingText', 'inline-block');

    const flex = document.createElement('div');
    flex.classList.add('flex', 'align-baseline');

    const image = document.createElement('img');
    image.classList.add('mx-10');
    image.setAttribute('src', '/radio-button.svg');
    image.setAttribute('alt', 'Radio button icon');

    const h5 = document.createElement('h5');
    h5.textContent = text;

    flex.appendChild(image);
    flex.appendChild(h5);
    card.appendChild(flex);

    container.appendChild(card);

    gsap.fromTo(
      card,
      {
        x: '-100vh',
      },
      {
        x: '100vw',
        repeat: -1,
        duration: 10,
        ease: 'none',
        // paused: true,
      }
    );
  });
}
