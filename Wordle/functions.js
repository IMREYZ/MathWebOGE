function searchIndexLetter(word, letter){
    let arrayIndex = []

    for (let index = 0; index < word.length; index ++){
        if (word[index] === letter) arrayIndex.push(index)
    }

    return arrayIndex
}

function infoAboutInputWord(inputWord, searchWord){
    let resultArray = []

    for (let index = 0; index < inputWord.length; index ++){
        const letter = inputWord[index]

        if (!searchWord.includes(letter)) resultArray.push('gray')
        else {
            const arrayIndexThisLetter = searchIndexLetter(searchWord, letter)
            if (arrayIndexThisLetter.includes(index)) resultArray.push('green')
            else resultArray.push('yellow')
        }
    }

    return resultArray
}

function finalOrNo(array){
    for (i = 0; i < array.length; i ++) {
        if (array[i] !== 'green') return false
    }

    return true
}

function getCurr(){
    return getLocalStorage('currString')
}

function getCurrInputs(value){
    let currInputs = []
    const allInputs = [...document.querySelectorAll('.inputLetter')]

    allInputs.forEach(element => { if (+getNumberStringThisInput(element.id) === +value) currInputs.push(element) })

    return currInputs
}

function getNumberStringThisInput(id){
    const array = id.split('.')
    return array[0]
}

function getNumberColumnThisInput(id){
    const array = id.split('.')
    return array[1]
}

function gluingInputs(arrayInputs){
    let finalWord = ''
    arrayInputs.forEach(element => finalWord += element.value)

    return finalWord
}

function wordIsReady(arrayInputs){
    for (let i = 0; i < arrayInputs.length; i ++){
        if (arrayInputs[i].value === '') return false
    }

    return true
}

function thisStringIsVisible(number){
    const allInputs = [...document.querySelectorAll('.inputLetter')]
    allInputs.forEach(element => {
        const idThisInput = element.id
        element.disabled = (+getNumberStringThisInput(idThisInput) !== number)
    })

}

// Запись в LocalStr
function setLocalStorage(nameLocal, value){
    localStorage.setItem(nameLocal, JSON.stringify(value))
}


// Получение из LocalStr
function getLocalStorage(value){
    return JSON.parse(localStorage.getItem(value))
}

// Удаление из LocalStr
function removeLocalStorage(value){
    localStorage.removeItem(value)
}

function createContent(wordLength, countTry){
    const conteynerHTML = document.querySelector('.conteyner')
    let textForConteyner = ''

    for (let i = 0; i < countTry; i ++){
        let textForOneWord = `<div class='stringInputs'>`
        for (let j = 0; j < wordLength; j ++){
            textForOneWord += `<input id=${i+1}.${j+1} autocomplete="off" maxlength=1 class='inputLetter'>`
        }

        textForOneWord += '</div>'
        textForConteyner += textForOneWord
    }

    conteynerHTML.innerHTML = textForConteyner

    thisStringIsVisible(1)

    const firstInput = document.querySelector('.inputLetter')
    firstInput.focus()
}

const WORD = ['ТОПОР', 'ПОВАР', 'ТЫКВА', 'ПИТЕР']

function randomWord() {
    const index = Math.floor(Math.random() * WORD.length)
    return WORD[index]
}