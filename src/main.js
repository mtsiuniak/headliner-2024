import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
// hero background-image 
const backgroundImageHero = document.querySelector('#hero-section');
function heroBackgroundImage() {
    
    const backgrounds = ['red', 'pink', 'blue', 'green', 'grey', 'orange'];
            
            setInterval(function changeBackground() {
                backgroundImageHero.className = '';
                const randomIndex = Math.floor(Math.random() * backgrounds.length);
                const randomClass = backgrounds[randomIndex];
                backgroundImageHero.classList.add(randomClass);
            }, 2000)   
    }
heroBackgroundImage();
//  /hero background-image 
