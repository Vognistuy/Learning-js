'use strict';

const box = document.querySelector('.box');

// --------------Нулевое слияние - ??, работает только со значениями null и undefined

// const newHeight = 10;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }

// changeParams(box, newHeight, newWidth);

// let userName;

// let userKey;
// console.log(userName ?? userKey ?? 'User');

// ------------------------Оператор опциональной цепочки - ?. проверяет значение слева от себя(null, undefined), только для чтения элемента-------------
// const block = document.querySelector('.block');

// console.log(block)

// if(block){
//     console.log(block.textContent);
// }
// console.log(block?.textContent);
// console.log(1 + 2);

const userData = {
    name: 'Oleg',
    age: null,
    say: function(){
        console.log('hello');
    }
}

userData.hey?.();

console.log(userData.skills?.js);