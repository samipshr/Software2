'use strict';

const year = prompt('Enter an year:');

if ((year % 4 === 0 && year %100 !== 0) || year % 400 === 0) {
    document.querySelector('#target').innerText = `${year} is a leap year.`;

} else{
    document.querySelector('#target').innerText = `${year} is not a leap year.`;
}