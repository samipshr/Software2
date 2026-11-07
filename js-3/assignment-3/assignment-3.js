'use strict';

let dogs = [];
for (let i = 0; i < 6; i++){
    let name = prompt("Enter a dog name:");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let target = document.getElementById("target");

for(let i = 0; i < dogs.length; i++){
    let li = document.createElement("li");
    li.textContent = dogs[i];
    target.appendChild(li);
}