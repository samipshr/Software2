'use strict';

const target = document.getElementById('target');

const count = Number(prompt('How many dice do you want to roll?:'));
let sum = 0;

for (let i = 0; i < count; i++) {
  const result = Math.floor(Math.random() * 6) + 1;
  sum += result;
}

target.innerHTML = 'The sum of the dice rolls is ' + sum;
console.log(sum);
