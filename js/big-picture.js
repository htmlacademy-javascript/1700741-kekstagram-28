
const bigPicture = document.querySelector('.big-picture');
const containerBigPicture = bigPicture.querySelector('.big-picture__img');
const imgBigPicture = containerBigPicture.querySelector('img');
const fieldLikeCount = document.querySelector('.likes-count');
const listSocialComments = document.querySelector('.social__comments');

const renderSocialComment = ({avatar, name, }) => {
  const comment = document.createElement('li');
  const imgAvatar = document.createElement('img');
  imgAvatar.classList.add('social__picture');
  imgAvatar.src = avatar;
  imgAvatar.alt = name;
  imgAvatar.width = 35;
  imgAvatar.height = 35;
  comment.append(avatar);

  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  comment.append(textComment);
}

bigPicture.href = imgBigPicture.src ;
const likes = fieldLikeCount.textContent;



bigPicture.classList.remove('hidden');

Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
Описание фотографии description вставьте строкой в блок .social__caption.

После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

Подключите модуль в проект.

Как связать модули миниатюр и полноразмерного режима?
Задача не имеет одного верного решения, поэтому будет правильным как использование третьего модуля для связки двух других, так и импорт модуля полноразмерных изображений в модуль миниатюр и дальнейшая работа с интерфейсом этого модуля, addEventListener и замыканиями. Последнее решение похоже на демонстрацию по учебному проекту. А первое — с третьим модулем — более сложное из-за отсутствия примера, но самостоятельное. В качестве третьего модуля можно выбрать точку входа, а можно завести отдельный модуль, например «Галерея». Решение за вами.
