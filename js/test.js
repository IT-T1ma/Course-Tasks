"use strict";
// function showAge () {
//     console.log('19');
// }

// showAge();

// let showName = function() {
//     console.log('Tima');
// };
// showName();

// let getLastName = () => {
//     console.log('Mixno');
// };
// getLastName();


////////// ЗАМЫКАНИЕ ///////////////////


// function Counter () {
//     let count = 0;
//  return function () {
//     count++;
//     return count;
//     }
// }

// let counter = Counter();
// let secondCouner = Counter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(secondCouner());
// console.log(secondCouner());
// console.log(secondCouner());

/////////////////////////////////

// function counter () {
//     let x = 0;
//  return function () {
//         x = x + 1;
//  return x;
//     };
// }
// let num1 = counter();

// console.log(num1());
// console.log(num1());
// console.log(num1());

///////////////////////////////  

// let x = "Tima";
// console.log(x[3]);

// let x = "Tima";
//  console.log(x.toUpperCase());

// let x = "TiMa";
//  console.log(x.toLowerCase());

// const x = 12.2;
// console.log(parseFloat(x));



// функция callback////

// function learnJS (lang, callback) {
//     console.log(`i am learning ${lang}`);
//     callback();
// }

// function x () {
//     console.log('I am finished courses!');
// }
// learnJS("Java", x);

//

// Перебор ключей объекта/////////////////////////////////////

// const options = {
//     name: 'Tima',
//     age: 19,
//     work: {
//         city: "Kyiv",
//         pos: "Front End",
//         pay: "500$"
//     }
// };
////
// const {city, pay} = options.work;
// console.log(pay);
////

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);
//////////////////////////////////////////////////////////////////////////

// const arr = [2, 13, 26, 8];
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
//     return a - b;
}
// console.log(arr);
// for (let value of arr) {
//     console.log(arr[value]);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} в масивк ${arr}`);
// });

// const string = prompt("", "");
// const products = string.split(", ");
// products.sort();
// console.log(products.join('; '));

// const obj = {
//     a: 2,
//     b: 3,
//     c: 6,
//     d: {
//         x: 1,
//         y: 2
//     }
// };

// const ob = {
//     g: 23
// };

// const copy = Object.assign({}, obj);
// console.log(copy);


// const arr = [1, 2, 3, 4];

// const newArr = arr.slice();

// arr[1] = 3;
// console.log(newArr); 
// console.log(arr); 


// const web = ['html', 'ccs', 'js'],
//       spa = ['react'],
//       design = ['ps', 'figma'];

//       const all = [...web, ...spa, ...design, 'Tima'];
//     console.log(all);

