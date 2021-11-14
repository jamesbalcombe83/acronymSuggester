const fs = require("fs");
const nouns = __dirname + '/wordLists/nouns.txt';
const adjectives = __dirname + '/wordLists/adjectives.txt';

function getNouns() {
    return fs.readFileSync(nouns, 'utf8')
             .split("\n")
             .map(word => word.trim())
}

function getAdjectives() {
    return fs.readFileSync(adjectives, 'utf8')
             .split("\n")
             .map(word => word.trim())
}

function toProperCase(word) {
    const splitWord = word.split("");
    splitWord[0] = splitWord[0].toUpperCase();
    return splitWord.join("");
}

function acronymSuggester(acronym) {
    if (typeof acronym !== "string") {
        throw new Error("Invalid input, Please enter a string representing an acronym.");
    }
    if(acronym.indexOf(" ")>= 0) {
        throw new Error("Invalid input, Acronyms don't have spaces.");
    }

    const letterList = acronym.toLowerCase().split("");

    letterList.forEach((letter,index) => {
        if (index+1 === letterList.length) {
            const filteredNouns =getNouns().filter(word => word[0]===letter)
            letter = filteredNouns[Math.floor(Math.random()*filteredNouns.length)]
        } else {
            const filteredAdjectives =getAdjectives().filter(word => word[0]===letter)
            letter = filteredAdjectives[Math.floor(Math.random()*filteredAdjectives.length)]
        }
        letterList[index] = toProperCase(letter);
    });
    const output = letterList.join(" ").trim();
    console.log(output);
    return output;
}

module.exports = { acronymSuggester };