"use strict";

let numbersOfFilms;
let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {

    numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numbersOfFilms == '' || numbersOfFilms == NaN || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
// start();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
// showMyDB();

function rememberMyFilms () {
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
}}
// rememberMyFilms();

function detectedPersonalLevel () {
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
}
// detectedPersonalLevel();

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
// writeYourGenres();
// console.log(personalMovieDB);
