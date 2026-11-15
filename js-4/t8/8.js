'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const ops = document.querySelector('#operation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function(){
    const no1 = Number(num1.value);
    const no2 = Number(num2.value);
    
    let answer;
    if (ops.value === 'add'){
        answer = no1 + no2;
    } else if(ops.value === 'sub'){
        answer = no1 - no2;
    } else if(ops.value === 'multi'){
        answer = no1 * no2;
    } else if(ops.value === 'div'){
        answer = no1 / no2;
    }
    result.textContent = answer;
});