const i = document.querySelectorAll('li')

document.querySelector('#count').textContent = `Всего слов: ${i.length}`

i.forEach(el => el.addEventListener('click', () => toggleColor(el)))

function shuffle() {
    const ol = document.querySelector('ol');
    const lis = ol.querySelectorAll('li');
    const result = [];
    const indexes = [];
    for (let i = 0; i < lis.length; i++) {
        indexes.push(i);
    }
    while (indexes.length > 0) {
        const randomIndex = Math.floor(Math.random() * indexes.length)
        const indexToPush = indexes[randomIndex]
        indexes.splice(randomIndex, 1)

        result.push(lis[indexToPush])
    }

    ol.replaceChildren(...result);
}

function hideRu() {
    hide("even")
    show("odd")
}

function hideGe() {
    hide("odd")
    show("even")
}

function hide(which) {
    document.querySelectorAll(`li div:nth-child(${which})`).forEach(i => i.style.visibility = "hidden")
}

function show(which) {
    document.querySelectorAll(`li div:nth-child(${which})`).forEach(i => i.style.visibility = "visible")
}

function showAll() {
    document.querySelectorAll(`li div`).forEach(i => i.style.visibility = "visible")
}

function toggleColor(el) {
    const s = el.style
    const newColor = 'rgb(168, 130, 221)'

    s.backgroundColor === newColor
        ? s.backgroundColor = 'initial'
        : s.backgroundColor = newColor
}