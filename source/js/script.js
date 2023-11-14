const header = document.querySelector('.header');
const navMenuButton = document.querySelector('.navigation__menu-button');
const navigation = document.querySelector('.navigation');

header.classList.remove('header--nojs');
navigation.classList.remove('navigation--nojs');


navMenuButton.addEventListener('click', () => {
  navigation.classList.toggle('navigation--opened');
  navigation.classList.toggle('navigation--closed');
});
