'use strict';
// defer - загружает скрипт в фоновом режиме, не мешая строить ДОМ структуру
// и выполняется после полной загрузки
// async - запускается как только был загружен, становяться независимыми
// скрипт должен быть независим от ДОМ структуры


const p = document.querySelectorAll('p');
console.log(p);

// Создание скрипта в HTML

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('./js/scriptOOP.js');
loadScript('./js/scriptDOM.js');