import updatePreview from './gallery-preview.js';
import openPopup from './popup.js';

/**
 * находим контейнер для превьюшек
 * @type {HTMLElement}
 */
const gallery = document.querySelector('.pictures');

/**
 * находим образец картинки
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');

/**
 * находим выпадающий блок для большой картинки
 * @type {HTMLElement}
 */
const popup = document.querySelector('.big-picture');

/**
 * наполняем картинку данными
 * @param {PictureState} data
 * @return {HTMLAnchorElement}
 */
const createPicture = (data) => {
  const picture =
  /**
   * @type {HTMLAnchorElement}
   */
  (pictureTemplate.content.querySelector('.picture').cloneNode(true));

  picture.querySelector('.picture__img').setAttribute('src', data.url);
  picture.querySelector('.picture__img').setAttribute('alt', data.description);
  picture.querySelector('.picture__comments').textContent = String(data.comments.length);
  picture.querySelector('.picture__likes').textContent = String(data.likes);

  picture.addEventListener('click', (event) => {
    updatePreview(data);
    openPopup(popup);
    event.preventDefault();
  });

  return picture;
};

/**
 * добавление и удаление превьюшек
 * @param {PictureState[]} data
 */
const renderPictures = (data) => {
  const pictures = gallery.querySelectorAll('.picture');
  const newPictures = data.map(createPicture);

  pictures.forEach((picture) => picture.remove());
  gallery.append(...newPictures);
};

/**
 * инициация отрисовки картинок
 * @param {PictureState[]} data
 */
const initGallery = (data) => {
  renderPictures(data);
  updatePreview(data[1]);
  openPopup(popup);
};

export default initGallery;
