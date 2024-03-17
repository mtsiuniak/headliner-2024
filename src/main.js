import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from "axios"
import postRequestPortfolioApi from './js/postRequestPortfolioApi';

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


//work_together 



const form = document.querySelector('.footer-form')
 const emailInput = document.querySelector('input[name="email"]')
form.addEventListener('submit', handSubmit)

function handSubmit(event) {
    event.preventDefault()
    const userEmail = event.target.email.value.trim()
    const userComment = event.target.comments.value.trim()
    if (userEmail || userComment) {
        console.log(`${userEmail}: ${userComment}`);
        const options = new URLSearchParams({
            email: userEmail,
            comment: userComment,
        })
        const jsonOptions = options.json()
        console.log(typeof jsonOptions);
        postRequestPortfolioApi(jsonOptions)
            .then(data => {
            alert(`ok ${data}`)
            })
            .catch(er => {
            alert(er)
        })
    };

    
}



emailInput.addEventListener('focus', () => {
    if (form.classList.contains('success-email')) {
        form.classList.remove('success-email')
    }
    if (form.classList.contains('failed-email')) {
        form.classList.remove('failed-email')
    }
})


emailInput.addEventListener('blur', () => {
    if (emailInput.checkValidity()) {
        form.classList.add('success-email')
    } else {
        form.classList.add('failed-email')
        
    }

})

//  /work_together