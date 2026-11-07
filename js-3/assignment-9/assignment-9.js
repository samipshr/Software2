'use strict';

function even(array){
    let evennum = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evennum.push(array[i]);
        }
    }
    return evennum;
}
let numbers = [2, 7, 4];
let result = even(numbers);

console.log("Original array:", numbers);
console.log("Even numbers:", result);