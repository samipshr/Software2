'use strict';

const form = document.querySelector("#source");
const fname = document.querySelector("input[name=firstName]");
const lname = document.querySelector("input[name=lastName]");
const p = document.querySelector("#target");


form.addEventListener('submit', function (evt) {
evt.preventDefault();
p.innerText = `Your name is ${fname.value} ${lname.value}`;
});
