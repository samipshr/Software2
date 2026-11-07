'use strict';

function roll(sides){
    return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter the number of sides on the dice:"));
let target = document.getElementById("target");
let result;

do{
    result = roll(sides);
    let li = document.createElement("li");
    li.textContent = result;
    target.appendChild(li);
} 
while (result !== sides);