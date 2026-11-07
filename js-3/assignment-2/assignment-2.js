'use strict';

let participants = [];
let amount = Number(prompt("How many participants?"))

for(let i=0; i < amount; i++){
    let name = prompt("Enter participant name:");
    participants.push(name);
}

participants.sort();
const target = document.getElementById("target");

for(let i = 0; i < participants.length; i++){
    let item = document.createElement("li");
    item.textContent = participants[i];
    target.appendChild(item);
}