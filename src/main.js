const buttonopen = document.querySelector('.mobile-open-btn'); 
const menu = document.querySelector('.mobile-menu'); 
const buttonclose = document.querySelector('.button-close');
const onToggleMenuHandlerOP = () => menu.classList.toggle('is-open'); 
const onToggleMenuHandlerCL = () => menu.classList.toggle('is-open');
buttonopen.addEventListener('click', onToggleMenuHandlerOP); 
buttonclose.addEventListener('click', onToggleMenuHandlerCL);


