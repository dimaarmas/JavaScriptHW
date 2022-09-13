const navMenuBtn = document.querySelector('.nav-menu-button');
const navMenu = document.querySelector('.nav-menu');

navMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});
