'use strict';

// const btn = document.querySelector('button');

// -----------Устаревшая запись--------
// btn.onclick = function(){
//     alert('click')
// }

// ------------------------------------

// btn.addEventListener('click', () => {
//     alert('click')
// });

// btn.addEventListener('click', () => {
//     alert('second click')
// });

// let i = 0;
// const deleteEvent = (e) => {
//     console.log(e.target);
//     i++;
//     if(i == 1){
//         btn.removeEventListener('click', deleteEvent);
//     }
// }

// btn.addEventListener('click', (e) => {
//     // console.log(e.target);
//     // console.log('click');
//     e.target.remove();
// });

// btn.addEventListener('click', deleteEvent);

// ВСПЛЫТИЕ СОБЫТИЙ - выполнение сначала вложенного события и поднятие по иерархии вверх.

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay')

const deleteEvent = (e) => {
    console.log(e.target);
    console.log(e.type);
}

// btn.addEventListener('click', deleteEvent);
// overlay.addEventListener('click', deleteEvent);

btns.forEach(btn =>{
    btn.addEventListener('click', deleteEvent, {once: true});
})

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();// отмена стандартного поведения браузера

    console.log(event.target);
})