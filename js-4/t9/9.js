'use strict';

const calculation = document.querySelector('#calculation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function(){
    const input = calculation.value;
    
    let answer;
    if (input.includes('+')){
        const nums = input.split('+');
        result.textContent = Number(nums[0]) + Number(nums[1]);
    } else if (input.includes('-')){
        const nums = input.split('-');
        result.textContent = Number(nums[0]) - Number(nums[1]);
    } else if (input.includes('*')){
        const nums = input.split('*');
        result.textContent = Number(nums[0]) * Number(nums[1]);
    } else if (input.includes('/')){
        const nums = input.split('/');
        result.textContent = Number(nums[0]) / Number(nums[1]);
    }
});