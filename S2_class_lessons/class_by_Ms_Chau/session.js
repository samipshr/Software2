/* BOM */ 
/* window */

'use strict';

window.document.querySelector("#greetings").innerText = "welcome to the bakery";

// //pop up window
// alert("welcome");

// //pop up window but includes OK & cancel:

// const news_confirm = confirm("do you want to receive the newsletter from us?");
// console.log(news_confirm)

// if(news_confirm){
    document.querySelector("#Bomresult").innerText = "Thanks! you will get our newsletter";
// } else {
//     document.querySelector("#Bomresult").innerText = "hm, maybe you will get it later";
// }
// // prompt: required answer from the user,(String format):

const user = prompt("Hello, what is you name sir? : ");
console.log(user);

if (user){
    document.querySelector("#greetings").innerText = "Welcome " + user + "!";
}

//location - tells the address info of the document/ rediect to another page
console.log(location.href)
//location.herf = "https://www.metropolia.fi/fi"

//BOM
//Getting/Selecting the elements
const news = document.getElementById("news");
const newsPara = news.getElementsByTagName ("p");
//document.queryselector("#newsNum").innerText = newsPara.length;
console.log(newsPara.length);

// combine both higher elements in the structure and the lower
const newsPara2 = document.getElementById("news").getElementsByTagName("p");
console.log(newsPara2.length)

//single commant to select (CSS selector)
const newsPara3 = document.querySelectorAll("#news p");
console.log(newsPara3.length)

//Select and create element(s):
//document.queryselector() --> retrieves a single element (CSS selector)
//document.queryselectorALL() --> retrieves elements from documents (CSS selector)
//document.getElementById() --> retrives an element with specific Id
//document.createElement("p") --> creates a new element named p

const logo = document.querySelector("#logo");
console.log(logo);
const logoID = document.getElementById("logo");
console.log( logo == logoID)

//create a new element and add it to the document as a child of another element
const textNew = document.createElement("p");
textNew.innerText = " This is a new element created using createElement "
document.querySelector("#greetings").appendChild(textNew)
console.log(document.querySelector("#greetings").children)

//remove the new element
greetings.removeChild(textNew);
console.log(document.querySelector("#greeting").children)

//select elements that match with the CSS selector (class)
const buttons = document.querySelectorAll(".button")
console.log(buttons.length)

// Go through a list and make the texts bold
const items = document.querySelectorAll("#menu");
for(let item of items){
    item.innerHTML = `<b>${item.innerHTML}</b>`;
    item.style.fontWeight = "bold";
}

// Go through a list using function()
items.forEach(function(item) {
    item.innerHTML = `<b>${item.innerHTML}</b>`;
})

//select by tag and class at the same time:
const bulletins = document.querySelectorAll("p.specialbulletins");
for (let bulletin of bulletins) {
    // bulletin.classList.add("Fresh juice");
    bulletin.innerText = "Free juice for free";
}

//Adding new image (for ex) to the document
const photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizaedYnYtRePKtCcLkQYZlsLpsPjf93NVe-0GXbZvYBvVXJP4Pml9x5va&s=10";

// Using innerHTML:
const divA = document.querySelector("#specialbun");
const html =
`<p>
    Today's special offer: Cinnamon bun with tea.
    <img src="${photo}>
</p>`;
divA.innerHTML = html;

// Using DOM function
const divB = document.querySelector("#specialcake");
const img = document.createElement("img");
img.src = photo;
const text = document.createTextNode("Today's special offers: cinnamon bun with tea. ")

const p = document.createElement("p");
p.appendChild(text);
p.appendChild(img);

divB.appendChild(p);

//CSS handeling
document.querySelector("#toggle").style = "background-color: #a89bff; padding: 1rem;"
// add an element to a class if there isn't defined.
document.querySelector("#toggle").classlist.toggle("Sale");
document.querySelector("#replace").classlist.replace("box", "Sale");