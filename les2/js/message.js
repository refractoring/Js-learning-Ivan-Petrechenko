"use strict";

//alert('Oh, no!');

// let res = confirm("Are you good?");
// console.log(res);

// const answer = prompt("Are you older 18?", "");
// console.log(answer);

const answers = [];

answers[0] = prompt("Name:");
answers[1] = prompt("Surname:");
answers[2] = prompt("Years old:");
document.write(answers);

console.log(`Hello ${answers[0]}, are you really ${answers[2]}?`);