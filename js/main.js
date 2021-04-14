"use strict";

const numbersOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const  personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 let firstQuastionFilm = prompt("Один из последних просмотренных фильмов?");
 let firstRatingFilm = prompt("На сколько оцените его?");

 let secondQuastionFilm = prompt("Один из последних просмотренных фильмов?");
 let secondRatingFilm = prompt("На сколько оцените его?");

personalMovieDB.movies[firstQuastionFilm] = firstRatingFilm;
personalMovieDB.movies[secondQuastionFilm] = secondRatingFilm;

console.log(personalMovieDB);
