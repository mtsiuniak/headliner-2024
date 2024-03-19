
const backgroundImageHero = document.querySelector('#hero-section');

export function heroBackgroundImage() {
  const backgrounds = ['red', 'pink', 'blue', 'green'];

  setInterval(function changeBackground() {
    backgroundImageHero.className = '';
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomClass = backgrounds[randomIndex];
    backgroundImageHero.classList.add(randomClass);
  }, 4000);
}
