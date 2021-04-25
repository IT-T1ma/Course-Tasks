"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == NaN || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function  () {
        for (let i = 0; i < 2; i++) {
            let quastionFilm = prompt("Один из последних просмотренных фильмов?");
            let ratingFilm = prompt("На сколько оцените его?");
        
            if (quastionFilm != null && ratingFilm != null && quastionFilm.length < 50 && quastionFilm != "" && ratingFilm != "") {
                personalMovieDB.movies[quastionFilm] = ratingFilm;
                console.log('Good');
            } else {
                console.log('Error');
                i--;
            }
    }},
        detectedPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
            console.log(personalMovieDB);
        },
        writeYourGenres: function () {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`);

                if (genre == '' || genre == null) {
                    console.log('Error');
                    i--;              
                } else {
                personalMovieDB.genres[i - 1] = genre;
            }}
            personalMovieDB.genres.forEach ((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });   
        },
        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        }    
};




