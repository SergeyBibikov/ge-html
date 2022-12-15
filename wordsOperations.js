const { knownWords } = require("./knownWords");
const { newWords } = require("./newWords");

function count(collection, item) {
    return collection.filter(x => x == item).length
}
function findDuplicates() {
    const duplicates = []
    for (const p in knownWords) {
        const k = Object.keys(knownWords)
        if (count(k, p) > 1) {
            duplicates.push(p)
        }

    }
    console.log(duplicates);
}

function findAlreadyKnownWords(knWords, nWords) {
    const alreadyKnown = [];
    const knownWs = Object.keys(knWords);
    const newWs = Object.keys(nWords);
    for (const nw of newWs) {
        if (knownWs.includes(nw)) alreadyKnown.push(nw);
    }
    return alreadyKnown;
}
module.exports = {
    findAlreadyKnownWords
}