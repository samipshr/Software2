'use strict';

let numbers = [];

let number = Number(prompt("Enter a number (put 0 to end):"));
while (number !== 0){
    numbers.push(number);
    number = Number(prompt("Enter a number (put 0 to end):"));
}
numbers.sort(function(a,b){
    return b - a;
})

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}