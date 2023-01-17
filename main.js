const navToggle = document.querySelector('.mobile-nav-toggle');
const headerNav = document.querySelector('.header-nav');

navToggle.addEventListener('click', () => {
    headerNav.classList.toggle('is-opened');
})