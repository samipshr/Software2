'use strict';

const target = document.getElementById('target');

const number = parseInt(prompt('Enter an integer:'));
let Prime = true;

if (number <= 1) {
  Prime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      Prime = false;
      break;
    }
  }
}

if (Prime) {
  target.innerHTML = number + ' is a prime number.';
} else {
  target.innerHTML = number + ' is not a prime number.';
}