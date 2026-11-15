'use strict';
const names = ['John', 'Paul', 'Jones'];

const identity = document.querySelector('#target');
for (let i = 0; i<names.length; i++){
    identity.innerHTML += `<li>${names[i]}</li>`;
}