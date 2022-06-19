// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);
    });
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();

    //     console.log('move');
    // });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });
});

// touches - количество пальцев которые прикоснулись к экрану
// targetTouches - все пальцы которые взаимодействуют с конкретным эелементом
// changedTouches - список пальцев которые учавствуют в событии