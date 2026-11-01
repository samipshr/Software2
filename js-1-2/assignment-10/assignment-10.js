'use strict';

const target = document.getElementById('target');

const diceCount = parseInt(prompt('Enter the number of dice:'));
const wantedSum = parseInt(prompt('Enter the sum of the eye numbers:'));
const repetitions = 10000;
let hits = 0;

for (let i = 0; i < repetitions; i++) {
  let sum = 0;
  for (let j = 0; j < diceCount; j++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  if (sum === wantedSum) {
    hits++;
  }
}
const probability = hits / repetitions * 100;

target.innerHTML = 'Probability to get sum ' + wantedSum + ' with ' + diceCount +
  ' dice is ' + probability.toFixed(2) + '%';