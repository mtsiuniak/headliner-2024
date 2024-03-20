import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import postRequestPortfolioApi from './postRequestPortfolioApi';

const body = document.querySelector('body');
const btnSubmit = document.querySelector('.btn-submit');
const modalBack = document.querySelector('.modal-background');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
modalClose.addEventListener('click', closeModal);

btnSubmit.addEventListener('click', event => {
  const emailForm = form.elements.email.value.trim();
  const commentsForm = form.elements.comments.value.trim();
  if (!emailForm || !commentsForm) {
    event.preventDefault();
    iziToast.warning({
      message: 'Please fill out all fields',
      progressBar: false,
      position: 'bottomCenter',
      color: '#1c1d20',
      messageColor: '#fafafa',
      titleColor: '#fafafa',
    });
  }
});

function closeModal(ev) {
  if (
    (ev.type === 'click' && ev.currentTarget === modalClose) ||
    ev.keyCode === 27 ||
    (ev.type === 'click' && !modal.contains(ev.target))
  ) {
    modalBack.classList.remove('visible');
    document.removeEventListener('keydown', closeModal);
    body.classList.remove('modal-open');
    form.classList.remove('success-email');
  }
}

const form = document.querySelector('.footer-form');
const emailInput = document.querySelector('input[name="email"]');
form.addEventListener('submit', handSubmit);

function handSubmit(event) {
  event.preventDefault();
  const userEmail = event.target.email.value.trim();
  const userComment = event.target.comments.value.trim();

  if (userEmail && userComment) {
    const options = {
      email: userEmail,
      comment: userComment,
    };
    postRequestPortfolioApi(options)
      .then(() => {
        form.reset();
        modalBack.classList.add('visible');
        document.addEventListener('keydown', closeModal);
        modalBack.addEventListener('click', closeModal);
        body.classList.add('modal-open');
      })
      .catch(() => {
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
