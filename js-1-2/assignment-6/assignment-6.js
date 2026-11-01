'use strict';
 
const target = document.getElementById('target');
 
const calc = confirm('Should I calculate the square root?:');
 
if (calc) {
  const number = Number(prompt('Enter a number:'));
  if (number < 0) {
    target.innerHTML = 'The square root of a negative number is not defined';
  } else {
    target.innerHTML = 'The square root of ' + number + ' is ' + Math.sqrt(number);
  }
} else {
  target.innerHTML = 'The square root is not calculated.';
}
 