'use strict';

const APIUrl = 'https://api.chucknorris.io/jokes/random';
async function getJoke() {
    const response = await fetch(APIUrl);
    const result = await response.json();
    console.log(result.value);
}
getJoke();