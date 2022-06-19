'use strict'
// ------Примитивные типы данных  передаються по значению-------
// let a = 5,
//     b = a;

// b = b+5;

// console.log(b);
// console.log(a);

// ------ К объектам идет передача по ссылке -----
// const obj = {
//     a: 1,
//     b: 1
// }
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// ----ПОВЕРХНОСТНАЯ КОПИЯ для НЕ вложенных структур------
function copy(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
};

const numbers = {
    a: 3,
    b: 4,
    c: {
        x: 4,
        y: 8
    }
};
const newNumbers = copy(numbers);

newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 15,
    e: 23
};

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // метод для копирования

// newArray[1] = 'dfsfsfsdf'
// console.log(newArray);
// console.log(oldArray);

// -----------ES6+ методы для работы с массивами/объектами------

// -----------Spread operator - Он раскладывает соответствующий объект внутри нового 
// объекта. С его помощью можно получить только копию, он не может 
// изменять существующие объекты.-------------

// const video = ['youtube', 'vimeo', 'hdRezka'],
//       blogs = ['wordpress', 'blogger'],
//       internet = [...video, ...blogs, 'tg'];
// console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 6]

log(...num)

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);


