'use strict';
// лексическое окружение - внутренний скрытый технический обЪект
// каждый вызов функции - это создание нового лексического окружения
// let num = 5; debugger

// function number(){
//     let num = 3; debugger
//     console.log(num);
// }

// num = 6;
// number();debugger

// Замыкание 

function createCounter(){
    let counter = 0;

    const myFunction = function(){
        counter = counter +1;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();

const a = increment();
const b = increment();
const c = increment();
console.log(a,b,c);