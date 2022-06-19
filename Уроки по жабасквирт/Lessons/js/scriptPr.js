'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films you watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films you watched?', '');
        }
    },
    rememeberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the watched films?', ''),
                b = prompt('How much do you rate?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectedPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You haven`t seen a lot of movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('You are classical cinephile');
        } else if (personalMovieDB >= 30) {
            console.log('You have senn a lot of films');
        } else {
            console.log('error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false
        } else {
            personalMovieDB.private = true
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favourite genre have a number ${i}`)
            if (genre === '' || genre === null) {
                console.log('Uncorrect value');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Your favourite genre ${i + 1} - it's ${item}`);
        })
        
    }
};
