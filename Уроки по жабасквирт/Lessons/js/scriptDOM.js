'use strict';

const box = document.getElementById('some id'),
      btns = document.getElementsByTagName('some tag'),
      circles = document.getElementsByClassName('some className without dot'),
      hearts = document.querySelectorAll('.all selector'), // можно использовать forEach
      oneHeart = document.querySelector('.first selector');


//box.style.alignContent = 'center'; // создается инлайн стиль


//btns[1].style.alignContent = 'center';


// hearts.forEach(item => {
//     item.style.borderRadius = '100%';
// })


// создание элемента

// const div = document.createElement('div');
// div.classList.add('black');
// document.body.append(div);


// добавление внутрь блока элемент, в конец используя append

// document.querySelector('.some parent className').append(div)


// добавление внутрь блока эелемент, в начало с помощью prepend

// document.querySelector('.some parent className').prepend(div)


// добавление внутрь блока эелемент используя before/after

// hearts[0].before(div);
// hearts[0].after(div);


// удаление элемента

// circles[0].remove();


// замена элемента другим

// hearts[0].replaseWith(circles[0])


// ------------- Устаревшие свойства------------------

// wrapper.appendChild(div);

// wrapper.insertBefore(div, circles[2])

// wrapper.removeChild(hearts[1])

// wrapper.replaseChild(circles[0], hearts[1])


// ------------Модификация созданного элемента---------------


const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);

div.innerHTML = '<h1>Hello World</h1>'// можно использовать теги

// div.textContent = 'Hello' // просто создается текст

div.insertAdjacentHTML('afterend', '<h2>Hello World</h2>');
