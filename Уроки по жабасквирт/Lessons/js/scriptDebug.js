'use strict';

function hello(){
    console.log('Hello world!');
}

hello();

function  hi(){
    console.log('say hi!');
}

hi();

const arr = [1,2,5,6,2,34,6],
      sorted = arr.sort(compareNum);
    
function compareNum(a,b){
    return a - b;
}
console.log(sorted);
console.log(compareNum(23, 5)); 