import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';
import postRequestPortfolioApi from './js/postRequestPortfolioApi';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import { heroBackgroundImage } from './js/hero';
import { renderReviews } from './js/render-review';



// hero background-image js code start
heroBackgroundImage();
// hero background-image end ========================

// header js code start =============================
  const menuBox = document.querySelector('.menu-box');
  const buttonOpenMenu = document.querySelector('.button-menu');
  const buttonCloseMenu = document.querySelector('.button-mob-menu');
  const menuUnder = document.querySelector('.menu-under');
  const buttonMenuUnder = document.querySelector('.menu-tablet-deck');

  buttonOpenMenu.addEventListener("click", function(){
      menuBox.classList.toggle("visually-hidden");
  });

  buttonCloseMenu.addEventListener("click", function(){
      menuBox.classList.toggle("visually-hidden");
  });

  buttonMenuUnder.addEventListener("click", function(){
      menuUnder.classList.toggle("visually-hidden");
  });

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('anchor-header-menu') || event.target.classList.contains('order-btn-menu-mob')) {
      menuBox.classList.add('visually-hidden');
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('anchor-menu')) {
      event.preventDefault();
      const scrollId = event.target.getAttribute('href').substring(1);
      const scrollSection = document.getElementById(scrollId);
      scrollSection.scrollIntoView({ behavior: 'smooth'});
      menuUnder.classList.toggle('visually-hidden');
    }
  });

// header js code end ==================================



//work_together

const modalBack = document.querySelector('.modal-background');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
modalClose.addEventListener('click', closeModal);

function closeModal(ev) {
  if (ev.type === 'click' && ev.currentTarget === modalClose) {
    modalBack.classList.add('visually-hidden');
    document.removeEventListener('keydown', closeModal);
  } else if (ev.keyCode === 27) {
    modalBack.classList.add('visually-hidden');
    document.removeEventListener('keydown', closeModal);
  } else if (ev.type === 'click' && !modal.contains(ev.target)) {
    modalBack.classList.add('visually-hidden');
    document.removeEventListener('keydown', closeModal);
  }
}

const form = document.querySelector('.footer-form');
const emailInput = document.querySelector('input[name="email"]');
form.addEventListener('submit', handSubmit);

function handSubmit(event) {
  event.preventDefault();
  const userEmail = event.target.email.value.trim();
  const userComment = event.target.comments.value.trim();
  if (userEmail || userComment) {
    const options = {
      email: userEmail,
      comment: userComment,
    };
    postRequestPortfolioApi(options)
      .then(data => {
        form.reset();
        modalBack.classList.remove('visually-hidden');
        document.addEventListener('keydown', closeModal);
        modalBack.addEventListener('click', closeModal);
      })
      .catch(er => {
        iziToast.error({
          title: 'Oops!',
          message: 'Something went wrong',
          progressBar: false,
          position: 'topCenter',
          color: '#1c1d20',
          messageColor: '#fafafa',
          titleColor: '#fafafa',
        });
      });
  }
}

emailInput.addEventListener('focus', () => {
  if (form.classList.contains('success-email')) {
    form.classList.remove('success-email');
  }
  if (form.classList.contains('failed-email')) {
    form.classList.remove('failed-email');
  }
});

emailInput.addEventListener('blur', () => {
  if (emailInput.checkValidity()) {
    form.classList.add('success-email');
  } else {
    form.classList.add('failed-email');
  }
});

//  /work_together


// about-me start ==============
const accordionAboutMe = new Accordion('#accordion1', {
  showMultiple: true,
});
accordionAboutMe.open(0);

new Swiper('#swiper1', {
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  touch: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
    }
}
});
// about-me end  ====================


// FAQ start ======================
const accordion2 = new Accordion('#accordion2', {
  showMultiple: true,
});
// FAQ end ================



// Projects start ==================
const myPrevButton = document.querySelector('.projects-btn-prev');
const divButtonPrev = document.querySelector('#btn-prev');

const myNextButton = document.querySelector('.projects-btn-next');
const divButtonNext = document.querySelector('#btn-next');

const swiper2 = new Swiper('#swiper2', {
  direction: 'horizontal',
  on: {
    slideChange: function () {
      updateButtonsState();
    },
  },
  slidesPerView: 1,
  freeMode: true,
  swipeHandler: '.project-swiper-slide',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },
});


updateButtonsState();
function updateButtonsState() {
  if (swiper2.isBeginning) {
    myPrevButton.disabled = true;
    divButtonPrev.style.backgroundColor = ' rgb(42, 38, 38)';
    divButtonPrev.style.cursor = 'not-allowed';
  } else {
    myPrevButton.disabled = false;
    divButtonPrev.style.backgroundColor = 'transparent';
    divButtonPrev.style.cursor = 'pointer';
  }

  if (swiper2.isEnd) {
    myNextButton.disabled = true;
    divButtonNext.style.cursor = 'not-allowed';
    divButtonNext.style.backgroundColor = ' rgb(42, 38, 38)';
  } else {
    myNextButton.disabled = false;
    divButtonNext.style.cursor = 'pointer';
    divButtonNext.style.backgroundColor = 'transparent';
  }
}

// Projects end ==================================

// Reviews code start ============================

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('#review-swiper-list');

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Not found');
    }
    return response.json();
  })
  .then(data => {
    const markup = renderReviews(data);
    list.insertAdjacentHTML('beforeend', markup);
    console.log(list)
    
    const swiper = new Swiper('#swiper3', {

    on: {
    slideChange: function () {
      updateButtonsState();
    },
  },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
  
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 18,
        },
      },

 
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
     },
  
   });
    
  const myPrevButton = document.querySelector('.my-swiper-button-prev');
  const myNextButton = document.querySelector('.my-swiper-button-next');
    
updateButtonsState();

function updateButtonsState() {
  
  if (swiper.isBeginning) {
    myPrevButton.disabled = true;
  } else {
    myPrevButton.disabled = false;
  }

  if (swiper.isEnd) {
    myNextButton.disabled = true;
  } else {
    myNextButton.disabled = false;
  }
}

myPrevButton.addEventListener('click', () => {
  swiper.slidePrev();
});

myNextButton.addEventListener('click', () => {
  swiper.slideNext();
});
  })
  .catch(error => console.log(error));



