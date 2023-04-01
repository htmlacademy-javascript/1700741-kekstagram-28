import {pickItemFromList, pickIntegerInRange} from './utils.js';

const descriptions = [
  'хороший',
  'как на картинке',
  'интересный',
  'прекрасный',
  'тонкий',
  'красота',
  'яркий',
  'милый',
  'художественный',
  'замечательный',
  'приятный',
  'видный',
  'страшный',
  'злой',
  'дикий',
  'грош цена',
  'жестокий',
  'хуже некуда',
  'мрачный',
  'трагический',
  'жуткий',
  'тяжкий',
  'хуже не бывает',
  'отлично',
  'прекрасный рисунок'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?',
  'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.'
];

const names = [
  'Август',
  'Августин',
  'Авраам',
  'Аврора',
  'Агата',
  'Агафон',
  'Агнесса',
  'Агния',
  'Ада',
  'Аделаида',
  'Аделина',
  'Адонис',
  'Акайо',
  'Акулина',
  'Алан',
  'Алевтина',
  'Александр',
  'Александра',
  'Алексей',
  'Алена',
  'Алина',
  'Алиса',
  'Алла',
  'Алсу',
  'Альберт'
];

/**
 * @param {number} id
 * @return {CommentState}
 */
const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromList(messages);
  const name = pickItemFromList(names);

  return {id, avatar, message, name};
};

/**
 * @param {number} length
 * @return {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * @param {number} id
 * @return {PictureState}
 */
const createPictureState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList(pickIntegerInRange(0, 20));

  return {id, url, description, likes, comments};
};

/**
 * @param {number} length
 * @return {PictureState[]}
*/
const createPictureStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createPictureState(start + index));
};

export default createPictureStateList;
