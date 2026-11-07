'use strict';

let numbers = [];
let number = Number(prompt("Enter a number:"));
while (!numbers.includes(number)){
    numbers.push(number);
    number = Number(prompt("Enter a number:"));
}
alert("You have already entered the number: " + number);
numbers.sort(function(a,b){
    return a - b;
});

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}