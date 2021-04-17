"use strict";

const numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
}

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
}