const navMenuButtons = document.querySelectorAll('.navigation__menu-button');
const navigationMenu = document.querySelector('.navigation__menu');
const navMenuButtonClosed = document.querySelector('.navigation__menu-button--closed');
const navMenuButtonOpened = document.querySelector('.navigation__menu-button--opened');

navMenuButtons.forEach((navMenuButton) => {
  navMenuButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('navigation__menu--opened');
    navMenuButtonClosed.classList.toggle('hide');
    navMenuButtonOpened.classList.toggle('hide');
  });
});


