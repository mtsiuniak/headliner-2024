import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// hero background-image 
const backgroundImageHero = document.querySelector('#hero-section');
function heroBackgroundImage() {
    
    const backgrounds = ['red', 'pink', 'blue', 'green'];
            
            setInterval(function changeBackground() {
                backgroundImageHero.className = '';
                const randomIndex = Math.floor(Math.random() * backgrounds.length);
                const randomClass = backgrounds[randomIndex];
                backgroundImageHero.classList.add(randomClass);
            }, 4000)   
    }
heroBackgroundImage();
//  /hero background-image 
// header


const menuBox = document.querySelector(`.menu-box`);
const buttonOpenMenu = document.querySelector(`.button-menu`);
const buttonCloseMenu = document.querySelector(`.button-mob-menu`);

buttonOpenMenu.addEventListener("click", function(){
    menuBox.classList.toggle("visually-hidden");
}
)
buttonCloseMenu.addEventListener("click", function(){
    menuBox.classList.toggle("visually-hidden");
}
)
 const menuUnder = document.querySelector(`.menu-under`)
 const buttonMenuUnder = document.querySelector(`.menu-tablet-deck`)
 buttonMenuUnder.addEventListener("click", function(){
menuUnder.classList.toggle("visually-hidden")
 })