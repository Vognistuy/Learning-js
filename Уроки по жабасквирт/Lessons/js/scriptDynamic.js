'use strict';

// To String

// 1)

// console.log(typeof(String(null)));

// 2) Concat при сложении со строкой будет результат строкой

// console.log(typeof(5+''));

// const num = 5;

// console.log('http://youtube.com/catalog/' + num); old format

// const fontSize = 26 + 'px'

// To Number

// 1)
// console.log(typeof(Number('4')));

// 2)
// console.log(typeof(+'5'));

// 3)
// console.log(typeof(parseInt('15px', 10))) 10 - десятичная система

// To boolean

// 1)

// let switcher = null;

// if (switcher) {
//     console.log('working...');
// }
// switcher = 1;

// if(switcher) {
//     console.log('working...');
// }

// 2)

// console.log(typeof(Boolean('4')));

console.log(typeof(!!'4'));