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
