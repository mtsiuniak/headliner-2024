import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
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

