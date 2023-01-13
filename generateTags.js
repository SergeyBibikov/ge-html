const { knownWords } = require("./knownWords");
const { newWords } = require("./newWords");
const { findAlreadyKnownWords } = require("./wordsOperations");

function generate() {
    const _newWords = { ...newWords }

    const result = []
    const duplicates = findAlreadyKnownWords(knownWords, newWords)
    for (const d of duplicates) {
        delete _newWords[d]
    }
    if (duplicates.length > 0) result.push(`Следующие слова уже есть в словаре, они были удалены: ${duplicates} `)

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