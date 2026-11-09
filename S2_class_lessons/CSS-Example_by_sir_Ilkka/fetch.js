'use strict';

async function getTVShows (query) { 
    try { 
        const response = await fetch( 'https://api.tvmaze.com/search/shows?q=emmerdale' + query,
        );
        const shows = await response.json();
        if (!response.ok) {
            throw new Error (shows.message + '. Status code: ' + response.status);
        }
        return shows;
    } catch(err) {
        console.error(err);
    }
}
async function getData(){
    const results = await getTVShows('Batman');
    console.log(results);

    for (const result of results){
        const html = `<li>$(result.show.name)</li>`;
        document.querySelector('#target').innerHTML += html;
    }
}

getData();