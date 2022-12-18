const { knownWords } = require("./knownWords");
const { newWords } = require("./newWords");
const { findAlreadyKnownWords } = require("./wordsOperations");

function generate() {
    const type = process.argv[2] // k for known words, nw for new words
    const _newWords = { ...newWords }
    const result = []

    if (type !== "nw") {
        const duplicates = findAlreadyKnownWords(knownWords, newWords)
        for (const d of duplicates) {
            delete _newWords[d]
        }
        if (duplicates.length > 0) result.push(`Следующие слова уже есть в словаре, они были удалены: ${duplicates} `)

    }

    for (const [ge, ru] of Object.entries(_newWords)) {
        let st = `
                <div>${ge}</div>
                <div>${ru}</div>`
        if (type === "nw") {
            st = `
        <li> ${st}
        </li> `
        }
        result.push(st)
    }
    console.log(result.join("\n"))
}

generate()