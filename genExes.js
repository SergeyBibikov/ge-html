const fs = require("fs")

function createExercises() {
    const content = fs.readFileSync('./exercises/template.html').toString()
    const words = getWords();
    while (words.length > 0) {
        const w = words.splice(0, 30);
        writeToFile(content, w);
    }
}

function getWords() {
    const { newWords } = require("./newWords");
    const allLi = [];
    for (const [ge, ru] of Object.entries(newWords)) {
        allLi.push(`
                <li>
                <div>${ge}</div>
                <div>${ru}</div>
                </li>
        `)
    }
    return allLi
}

let fileCount = 1
function writeToFile(templateContent, liArr) {
    const n = templateContent.replace("replaceMe", liArr.join("\n"))
    fs.writeFileSync(`./exercises/renameMe${fileCount++}.2023.html`, n)
}

createExercises()