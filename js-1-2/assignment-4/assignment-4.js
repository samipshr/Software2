'use strict';

const name = prompt('Enter your name');

const number = Math.floor(Math.random() * 4) + 1;

// console.log(numbers);

let house = ' ';

switch(number){
    case 1:
        house = 'Gryffindor';
        break;
    case 2:
        house = 'Slytherin';
        break;
    case 3:
        house = 'Hufflepuff';
        break;
    case 4:
        house = 'Ravenclaw';
        break;
}

// console.log(house);

document.querySelector('#target').innerText = `${name}, you are ${house}.`;