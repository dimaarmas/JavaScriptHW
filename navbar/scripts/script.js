//NAVBAR
const navMenuBtn = document.querySelector('.nav-menu-button');
const navMenu = document.querySelector('.nav-menu');

navMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});

//Modal Window

const popUpContainer = document.querySelector('.popup');
const accountBtn = document.querySelector('.account-btn');
const crossIcon = document.querySelector('.cross-icon');

accountBtn.addEventListener('click', () => popUpContainer.classList.add('visible'));

crossIcon.addEventListener('click', () => popUpContainer.classList.remove('visible'));

