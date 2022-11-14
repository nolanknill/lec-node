/* These are basically the same */
// const axios = require('axios');
// import axios from "axios";

// Read from file
const fs = require('fs');


function getContestants() {
    const contestantsJson = fs.readFileSync("./data/contestants.json");
    
    return JSON.parse(contestantsJson);
}


function sortByAge() {
    return getContestants().sort((a, b) => { return a.age - b.age })
}

if (process.argv[2] === 'sort-by-age') {
    const sortedContestants = sortByAge();
    console.log(sortedContestants);
} else if (process.argv[2] === 'add-contestant') {
    const contestant = JSON.parse(process.argv[3]);
    addContestant(contestant);
} else {
    console.log(getContestants());
}


// How can we add a contestant?

// Establish a command
// node index.js add-contestant '{"name": "Gigi Goode", "hometown": "Woodstock, Illinois", "country": "USA", "age": 24, "originalSeason": "Season 12"}'

function addContestant(contestant) {
    // pretend we validated

    const contestants = getContestants();
    contestants.push(contestant);

    contestant.id = getNextId(contestants);

    fs.writeFileSync(
        "./data/contestants.json",
        JSON.stringify(contestants)
    );
}

function getNextId(contestants) {
    const contestantsCopy = [...contestants];
    const sortedByIdDesc = contestantsCopy.sort((a, b) => b.id - a.id);

    return sortedByIdDesc[0].id + 1;
}