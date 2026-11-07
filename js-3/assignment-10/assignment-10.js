'use strict';

let candidates = [];

// numofcandis as in like short for number_of_candidates
let numofcandis = Number(prompt("How many Candidates?"));
for (let i = 0; i < numofcandis; i++){
    let name = prompt("Name for Candidate " + (i + 1));
    candidates.push({
        name: name,
        votes: 0
    });
}

// Again the numofvotrs is short for number_of_voters
let numofvotrs = Number(prompt("How many Voters?"));
for (let i = 0; i < numofvotrs; i++){
    let vote = prompt("Who do you vote for?");
    for (let j = 0; j < candidates.length; j++){
        if (candidates[j].name === vote){
            candidates[j].votes++;
        }
    }
}
candidates.sort(function(a,b){
    return b.votes - a.votes;
});
console.log(
    "The winner is " + candidates[0].name +
    " with " + candidates[0].votes + " votes."
);
console.log("results:");
for (let i = 0; i < candidates.length; i++){
    console.log(
        candidates[i].name + ": " +
        candidates[i].votes + " votes"
    );
}