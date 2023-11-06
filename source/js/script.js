const header = document.querySelector('.header');
const navMenuButtons = document.querySelectorAll('.navigation__menu-button');
const navigationMenu = document.querySelector('.navigation__menu');
const navMenuButtonClosed = document.querySelector('.navigation__menu-button--closed');
const navMenuButtonOpened = document.querySelector('.navigation__menu-button--opened');

navMenuButtons.forEach((navMenuButton) => {
  navMenuButton.addEventListener('click', () => {
    header.classList.toggle('header--menu-opened');
    navigationMenu.classList.toggle('navigation__menu--opened');
    navMenuButtonClosed.classList.toggle('hide');
    navMenuButtonOpened.classList.toggle('hide');
  });
});

const form = document.querySelector('.form');

form.setAttribute('novalidate', 'novalidate');

const createTip = (elem) => {
  const formTip = document.createElement('span');
  formTip.classList.add('form__tip');
  formTip.innerHTML = 'Заполните это поле';
  elem.after(formTip);
};

const findInvalidInputs = () => {
  const formInputsRequired = form.querySelectorAll('.form__input--required');

  formInputsRequired.forEach((formInputRequired) => {
    if (!formInputRequired.value) {
      formInputRequired.classList.add('form__input--invalid');
      createTip(formInputRequired);
    } else {
      formInputRequired.classList.remove('form__input--invalid');
      if (formInputRequired.nextSibling) {
        formInputRequired.nextSibling.remove();
      }
    }
  });
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  findInvalidInputs();
});


