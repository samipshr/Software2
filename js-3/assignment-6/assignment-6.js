'use strict';

function roll(){
    return Math.floor(Math.random() * 6) + 1;
}

let target = document.getElementById("target");
let result;

do{
    result = roll();
    let li = document.createElement("li");
    li.textContent = result;
    target.appendChild(li);
} 
while (result !== 6);