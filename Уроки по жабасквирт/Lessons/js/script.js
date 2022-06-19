'use strict'
// Objects
const obj = {
    name: 'object name',
    options: 'hello',
    styles: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('test')
    }
}
// obj.makeTest();
// Цикл для перебора ключей объкта без волженных объектов
// for (let key in obj) {
//     console.log(`Свойство ${key} имеет значение ${obj[key]}`)
// }

// Цикл для перебора ключей объкта с волженными объектами
// Счетчик элементов
// С помощью for of нельзя перебрать объект
// let counter = 0;
// for (let key in obj) {
//     if (typeof (obj[key]) == 'object') {
//         for (let i in obj[key]) {
//             console.log(`Свойство ${i} имеет значение ${obj[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj[key]}`)
//     }

// }
// Метод объкта для подсчета количества ключей
// console.log(Object.keys(obj).length)

// Деструктуризация
const {
    border,
    bg
} = obj.styles;
console.log(border, bg);