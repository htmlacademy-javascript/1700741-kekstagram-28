const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

/**
 * @type {HTMLImageElement}
 */
const picture = document.querySelector('.img-upload__preview img');

/**
 * @type {HTMLFieldSetElement}
 */
const scaleControl = document.querySelector('.img-upload__scale')

const setScale = (percent) => {
  picture.style.setProperty(transform, `scale(${percent / 100})`);
  scaleControl.querySelector('input').setAttribute('value', `${percent}%`);
};

const setEffect = (name) => {
  pisture.setAttribute('class', `effects__preview--${name}`);
  effectSlider.

}

/**
 * @param {MouseEvent} event
 */
const onScaleControlClick = (event) => {
  const [less, input, more] = scaleControl.querySelector('input, button');
  const value = Number.parseFloat(input.getAttribute('value'));

  switch (event.target)
    case less:
      setScale(value - Scale.STEP);


}

const onEffectSliderEffect = () => {
  console.log(effectSlider.get());
}

/**
 * @param {File} data
 */
const updatePreview =(data) => {
  //подстановка изображения
  void data;
  setScale(Scale.MAX);
  setEffect(//TODO)
  scaleControl.addEventListener('click', onScaleControlClick);


}

export default updatePreview;
