const { knownWords } = require("./knownWords");
const { newWords } = require("./newWords");
const { findAlreadyKnownWords } = require("./wordsOperations");

function generate() {
    const _newWords = { ...newWords }

    const result = []
    let dupMessage = '';
    const duplicates = findAlreadyKnownWords(knownWords, newWords)
    for (const d of duplicates) {
        if (knownWords[d] !== newWords[d]) {
            dupMessage += `
            ${d}
            В словаре: ${knownWords[d]}
            В новых словах: ${newWords[d]}\n`
        }
        delete _newWords[d]
    }
    if (duplicates.length > 0) result.push(
        `Следующие слова уже есть в словаре, они были удалены: ${dupMessage} `)

    for (const [ge, ru] of Object.entries(_newWords)) {
        let st = `
                <div>${ge}</div>
                <div>${ru}</div>`
        result.push(st)
    }

    const fs = require("fs")
    fs.writeFileSync("forDict.html", result.join("\n"))
}

generate()