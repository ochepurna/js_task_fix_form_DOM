'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  const placeholder = input.name.toUpperCase();

  input.setAttribute('placeholder', placeholder);
});
