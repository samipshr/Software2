'use strict';

const start = prompt('Enter the start year:');
const end = prompt('Enter the end year:');

function checkLeapYear(year){
    if ((year % 4 === 0 && year %100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

let i = '';

for (let i = start; i <= end; i++) {
    if (checkLeapYear(i)) {
        console.log(i);
        document.querySelector('#target').innerHTML += `<li>${i}</li>`;
    }
}
