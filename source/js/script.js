const header = document.querySelector('.header');
const navMenuButton = document.querySelector('.navigation__menu-button');
const navigation = document.querySelector('.navigation');
const mapContainer = document.querySelector('.contacts__map-container');
const mapPicture = mapContainer.querySelector('.contacts__map-picture');

header.classList.remove('header--nojs');
navigation.classList.remove('navigation--nojs');
mapContainer.classList.remove('contacts__map-container--nojs');
mapPicture.classList.add('hide');


navMenuButton.addEventListener('click', () => {
  navigation.classList.toggle('navigation--opened');
  navigation.classList.toggle('navigation--closed');
});
