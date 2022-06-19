const now = new Date();
// const now = new Date(0);
// const now = new Date(-99999);
// const now = new Date('2022-05-01');
// const now = new Date(2020, 5, 2, 20);

// ---------Get-теры
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// ----------Set-теры

// console.log(now.setHours());
// console.log(now);

let start = new Date();

for(let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

alert(`Ready for ${end-start} milliseconds`)