const onDocumentKeyDown = (event) => {
  if (event.key.startsWith('ESC')) {
    const cancelButton = document.querySelector('.overlay:not(hidden) .cancel');
    console.log(cancelButton);
  }
}

/**
 *
 * @param {MouseEvent & {target: Element}} event;
 */

const onCancelButtonClick = (event) => {
  const popup = event.target.closest('.overlay');
  popup.classList.add('hidden');

  document.body.classList.remove('.modal-open');
};

/**
 *
 * @param {Element} popup;
 */
const openPopup = (popup) => {
  const cancelButton = popup.querySelector('.cancel');
  popup.classList.remove('hidden');

  cancelButton.addEventListener('click', onCancelButtonClick);

  document.body.classList.add('.modal-open');
};

export default openPopup;
