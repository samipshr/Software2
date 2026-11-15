'use strict';

const sub = document.querySelector('#target');
const click = document.querySelector('#trigger');
click.addEventListener('mouseover', function(){
    sub.src = 'img/picB.jpg';
});
click.addEventListener('mouseout', function(){
    sub.src = 'img/picA.jpg';
});