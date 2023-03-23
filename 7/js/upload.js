import openPopup from './popup.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

/**
 * @type {HTMLElement}
 */

const popup = form.querySelector('.img-upload__overlay');

/**
 *
 * @param {Event} evt
 */
const onFormChange = (evt) => {
  if (evt.target === form.filename) {
    openPopup(popup);
  }
};

addHashtagsValidator =  (tags) => {
  tags.len
};

form.addEventListener('change', onFormChange);
