'use strict';

const APIUrl = "https://api.tvmaze.com/search/shows";
const searchForm = document.querySelector('form');
const results = document.querySelector('#results');

searchForm.addEventListener('submit', async function (evt) {
    evt.preventDefault();

    const fd = new FormData(searchForm);
    const queryString = new URLSearchParams(fd).toString();
    const response = await fetch(`${APIUrl}?${queryString}`);
    const result = await response.json();
    results.innerHTML = '';

    for (const tvShow of result) {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = tvShow.show.name;
        article.appendChild(h2);

        const a = document.createElement('a');
        a.href = tvShow.show.url;
        a.target = '_blank';
        a.textContent = 'Link to details';
        article.appendChild(a);

        const img = document.createElement('img');
        if (tvShow.show.image) {
            img.src = tvShow.show.image.medium;
        } else {
            img.src = 'https://placehold.co/210x295?text=Not%20Found';
        }
        img.alt = tvShow.show.name;
        article.appendChild(img);

        const div = document.createElement('div');
        div.innerHTML = tvShow.show.summary || 'No summary available.';
        article.appendChild(div);
        
        results.appendChild(article);
    }
});