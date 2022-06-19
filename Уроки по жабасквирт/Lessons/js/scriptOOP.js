'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,3,4]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('hello');
    }
};
const john = Object.create(soldier);
// john.__proto__ = soldier; old standart

Object.setPrototypeOf(john, soldier);
john.sayHello();