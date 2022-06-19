'use strict';

const boxesQuery = document.querySelectorAll('.box'); // статическая коллекция

const boxesGet = document.getElementsByClassName('box');

console.log(boxesQuery);
console.log(boxesGet);
// console.log(document.body.children);


//----------- Живые и статические коллекции ----------

boxesQuery[0].remove();
boxesGet[0].remove();