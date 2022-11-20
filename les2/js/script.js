"use strict";

a = 1;
console.log(a);

let num = 5;
const leftBorderWidth = 1;

num = 1;
console.log(num);

// leftBorderWidth = 4;
console.log(leftBorderWidth);

const obg = {
    a: 101
}

obg.a = 2;
console.log(obg.a);

{
    let result = 22;
}

console.log(result);

let num = 4.1;
console.log(num/0);

console.log(9 * 'str'); //NaN

console.log('Hello ' + "world" + `!`);

const obj = {
    name: 'Sveta',
    age: 29,
    isMarried: true
};
console.log(obj.isMarried);
console.log(obj["age"]);

let arr = ['1', 1, {}, []];
console.log(arr[1]);