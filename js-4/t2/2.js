'use strict';

const stuff = document.querySelector('#target');

const item1 = document.createElement('li');
item1.textContent = 'First item';
stuff.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'Second item';
item2.classList.add('my-item');
stuff.appendChild(item2);

const item3 = document.createElement('li');
item3.textContent = 'Third item';
stuff.appendChild(item3);