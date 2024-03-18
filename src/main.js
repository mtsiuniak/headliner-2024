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


//  Reviews


const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.reviews-list');

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Not found');
    }
    return response.json();
  })
  .then(data => {
    list.innerHTML = renderReviews(data);
  })
  .catch(error => console.log(error));

function renderReviews(review) {
  return review
    .map(({ _id, avatar_url, author, review }) => {
      return `
      <li class="reviews-list-item"id="${_id}">
                            <img class="item-img "src="${avatar_url}" alt="${author}"
                            width="48"
                            height="48"
                            loading="lazy"
                            />
                            <div class="opinion">
                            <h3 class="author">${author}</h3>
                            <p class="review">${review}</p>
                                </div>
                        </li>`;
    })
    .join('');
}

const accordion = new Accordion('.accordion-container', {
  showMultiple: true,
});

