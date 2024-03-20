import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import { heroBackgroundImage } from './js/hero';
import { renderReviews } from './js/render-review';
import './js/work_together';

// header js code start =============================
const menuBox = document.querySelector('.menu-box');
const buttonOpenMenu = document.querySelector('.button-menu');
const buttonCloseMenu = document.querySelector('.button-mob-menu');
const menuUnder = document.querySelector('.menu-under');
const buttonMenuUnder = document.querySelector('.menu-tablet-deck');

buttonOpenMenu.addEventListener('click', function () {
  menuBox.classList.toggle('visually-hidden');
});

buttonCloseMenu.addEventListener('click', function () {
  menuBox.classList.toggle('visually-hidden');
});

buttonMenuUnder.addEventListener('click', function () {
  menuUnder.classList.toggle('visually-hidden');
});

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('anchor-header-menu') ||
    event.target.classList.contains('order-btn-menu-mob')
  ) {
    menuBox.classList.add('visually-hidden');
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('anchor-menu')) {
    event.preventDefault();
    const scrollId = event.target.getAttribute('href').substring(1);
    const scrollSection = document.getElementById(scrollId);
    scrollSection.scrollIntoView({ behavior: 'smooth' });
    menuUnder.classList.toggle('visually-hidden');
  }
});

// header js code end ===============================

// hero background-image star t======================
heroBackgroundImage();
// hero background-image end ========================

// about-me start ====================================
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
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
// about-me end  ====================

// FAQ start ======================
const accordion2 = new Accordion('#accordion2', {
  showMultiple: true,
});
// FAQ end ================

// Projects start ==================
const myPrevButton = document.querySelector('.projects-btn-prev');
const divButtonPrev = document.querySelector('.btn-prev');
const svgArrowPrev = document.querySelector('.projects-arrow-prev');

const myNextButton = document.querySelector('.projects-btn-next');
const divButtonNext = document.querySelector('.btn-next');
const svgArrowNext = document.querySelector('.projects-arrow-next');

const swiper2 = new Swiper('#swiper2', {
  direction: 'horizontal',
  on: {
    slideChange: function () {
      updateButtonsStateProject();
    },
  },

  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },
});

updateButtonsStateProject();
function updateButtonsStateProject() {
  if (swiper2.isBeginning) {
    myPrevButton.disabled = true;
    divButtonPrev.style.border = '1px solid #3B3B3B';
    divButtonPrev.style.cursor = 'not-allowed';
    svgArrowPrev.style.stroke = '#3B3B3B';
  } else {
    myPrevButton.disabled = false;
    divButtonPrev.style.border = '1px solid #FAFAFA';
    divButtonPrev.style.cursor = 'pointer';
    svgArrowPrev.style.stroke = '#FAFAFA';
  }

  if (swiper2.isEnd) {
    myNextButton.disabled = true;
    divButtonNext.style.cursor = 'not-allowed';
    divButtonNext.style.border = '1px solid #3B3B3B';
    svgArrowNext.style.stroke = '#3B3B3B';
  } else {
    myNextButton.disabled = false;
    divButtonNext.style.cursor = 'pointer';
    divButtonNext.style.border = '1px solid #FAFAFA';
    svgArrowNext.style.stroke = '#FAFAFA';
  }
}

// Projects end ==================================

// Reviews code start ============================

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('#review-swiper-list');

const myPrevButtonReview = document.querySelector('.review-btn-prev');
const divButtonPrevReview = document.querySelector('.btn-prev-review');
const svgArrowPrevReview = document.querySelector('.review-arrow-prev');

const myNextButtonReview = document.querySelector('.review-btn-next');
const divButtonNextReview = document.querySelector('.btn-next-review');
const svgArrowNextReview = document.querySelector('.review-arrow-next');

fetch(URL)
  .then(response => {
    if (!response.ok) {
      const showNews = document.querySelector('.show-news');
      console.log(showNews);
      showNews.textContent = 'No reviews found';
      showNews.style.textAlign = 'center';
      showNews.style.fontSize = '24px';
      showNews.style.color = 'rgba(250, 250, 250, 0.4)';
      throw new Error('Network response was not ok.');
    }

    return response.json();
  })
  .then(data => {
    const markup = renderReviews(data);
    if (markup === '') {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, reviews not found.',
        position: 'bottomLeft',
      });
    }

    list.insertAdjacentHTML('beforeend', markup);
    const swiper3 = new Swiper('#swiper3', {
      direction: 'horizontal',
      on: {
        slideChange: function () {
          updateButtonsStateReview();
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
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev',
      },
    });
    updateButtonsStateReview();
    function updateButtonsStateReview() {
      if (swiper3.isBeginning) {
        myPrevButtonReview.disabled = true;
        divButtonPrevReview.style.border = '1px solid #3B3B3B';
        divButtonPrevReview.style.cursor = 'not-allowed';
        svgArrowPrevReview.style.stroke = '#3B3B3B';
      } else {
        myPrevButtonReview.disabled = false;
        divButtonPrevReview.style.border = '1px solid #FAFAFA';
        divButtonPrevReview.style.cursor = 'pointer';
        svgArrowPrevReview.style.stroke = '#FAFAFA';
      }

      if (swiper3.isEnd) {
        myNextButtonReview.disabled = true;
        divButtonNextReview.style.cursor = 'not-allowed';
        divButtonNextReview.style.border = '1px solid #3B3B3B';
        svgArrowNextReview.style.stroke = '#3B3B3B';
      } else {
        myNextButtonReview.disabled = false;
        divButtonNextReview.style.cursor = 'pointer';
        divButtonNextReview.style.border = '1px solid #FAFAFA';
        svgArrowNextReview.style.stroke = '#FAFAFA';
      }
    }
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: 'Error while fetching reviews from server',
      position: 'bottomLeft',
    });
  });
// Reviews code end ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
