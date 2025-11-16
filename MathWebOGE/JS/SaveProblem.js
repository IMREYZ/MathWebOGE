import {getLocalStorage, getThisProblems, setLocalStorage} from "./LocalStorage.js"
import { searchObjectById } from "./OtherFunctions.js"
import { getParentForCurrSubject } from "./GetVariableForVariant.js"

function createAndSaveColorsFunction(event, thisProblems){
    if (event !== 'ENTER' && event.target.classList[0] !== 'submit') return
        
    if (!getLocalStorage('color')){ // Если нет в LocalStr createAndSaveColors, добавить gray
        const array = {}
        for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = 'gray'
        setLocalStorage('color', array)    
    }

    const parent = getParentForCurrSubject(event)
    const headerThisProblem = parent.querySelector('.number') // Верный ответ HTML
    const idThisProblemHTML = parent.id // id Контейнера    
    const thisProblem = searchObjectById(idThisProblemHTML, thisProblems) // Сама задача по индексу
    const idThisProblem = thisProblem.id // id этой задачи
    const objColor = getLocalStorage('color') // Объект {4001: gray, 4002: green, 4003: red...}

    objColor[idThisProblem] = headerThisProblem.classList[1] // Изменение этой задачи
    setLocalStorage('color', objColor) // Сохранение в LocalStr
    
    clearOtherSave(event, thisProblems)
}



function clearOtherSave(event, thisProblems){
    const parent = getParentForCurrSubject(event)
    const idThisProblemHTML = parent.id // id Контейнера    
    const thisProblem = searchObjectById(idThisProblemHTML, thisProblems) // Сама задача по индексу
    const idThisProblem = thisProblem.id // id этой задачи
    const objColor = getLocalStorage('color') // Объект {4001: gray, 4002: green, 4003: red...}
    const objAnswer = getLocalStorage('currInfoShowRightAnswer') // Объект {4001: gray, 4002: green, 4003: red...}
    const objSolution = getLocalStorage('showSolution') // Объект {4001: gray, 4002: green, 4003: red...}
    const objInput = getLocalStorage('inputCurr') // Объект {4001: gray, 4002: green, 4003: red...}

    if (objColor[idThisProblem] === 'green'){
        if (objAnswer) {
            objAnswer[idThisProblem] = false
            setLocalStorage('currInfoShowRightAnswer', objAnswer) // Сохранение в LocalStr
        }
        if (objSolution) {
            objSolution[idThisProblem] = false
            setLocalStorage('showSolution', objSolution) // Сохранение в LocalStr
        }
        if (objInput) {
            objInput[idThisProblem] = ''
            setLocalStorage('inputCurr', objInput) // Сохранение в LocalStr
        }
    }   
}






function createAndSaveColors(thisProblems){ // Создание и/или сохрание цветов
    document.addEventListener('click', event => createAndSaveColorsFunction(event, thisProblems)) 

    document.addEventListener('keydown', button => {
        if (button.key === 'Enter' && document.activeElement.classList[0] === 'input' && window.location.pathname !== '/MathWeb/HTML/stress.html') {            
            createAndSaveColorsFunction('ENTER', thisProblems)
        }
    })
}



function createAndSaveInputs(thisProblems){ // Создание и/или сохрание input
    document.addEventListener('input', event => {
        if (event.target.classList[0] !== 'input') return // Если событие - не кнопка input, то выходим
        
        
        if (!getLocalStorage('inputCurr')){ // Если нет в LocalStr currInfoShowRightAnswer, добавить
            const array = {}
            for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = ''

            setLocalStorage('inputCurr', array)    
        }

        const parent = event.target.closest('.conteyner') // Контейнер всего задания
        const thisInput = parent.querySelector('.input') // Текущий input
        const objInfo = getLocalStorage('inputCurr') // Объект {4001: gray, 4002: green, 4003: red...}
        const idThisProblemHTML = parent.id // id этой карточки - id задачи (4030, 11021...)
        const thisProblem = searchObjectById(idThisProblemHTML, thisProblems) // Сама задача по индексу 
        const idThisProblem = thisProblem.id // id этой задачи

        objInfo[idThisProblem] = thisInput.value // Изменение этой задачи
        setLocalStorage('inputCurr', objInfo) // Сохранение в LocalStr
    })
}



function createAndSaveInfoAnswers(thisProblems){ // Создание и/или сохрание нажатия на "показать ответ"
    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'pokOtw') return // Если не кнопка "показать ответ" - выходим 

        // Если нет в LocalStr currInfoShowRightAnswer, добавить
        if (!getLocalStorage('currInfoShowRightAnswer')){
            const array = {}
            for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = false
    
            setLocalStorage('currInfoShowRightAnswer', array)    
        }

        const parent = event.target.closest('.conteyner') // Контейнер всего задания
        const rightAnswer = parent.querySelector('.rightAnswer') // Верный ответ HTML
        const objInfo = getLocalStorage('currInfoShowRightAnswer') // Объект {4001: true, 4002: false, 4003: false...}
        const idThisProblemHTML = parent.id // id задачи (11020, 3004 ...)
        const thisProblem = searchObjectById(idThisProblemHTML, thisProblems) // Сама задача по индексу 
        const idThisProblem = thisProblem.id // id этой задачи

        objInfo[idThisProblem] = rightAnswer.classList[1] === 'show' // Изменение этой задачи
        setLocalStorage('currInfoShowRightAnswer', objInfo) // Сохранение в LocalStr 
        
    })
}



function createAndSaveSolution(thisProblems){ // Создание и/или сохрание нажатия на "показать решение"
    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'showSolutionText') return // Если не кнопка "показать ответ" - выходим 

        

        // Если нет в LocalStr currInfoShowRightAnswer, добавить
        if (!getLocalStorage('showSolution')){
            const array = {}
            for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = false
    
            setLocalStorage('showSolution', array)    
        }

        const parent = event.target.closest('.conteyner') // Контейнер всего задания        
        const solutionImg = parent.querySelector('.imgSolutionConteyner')
        const objInfo = getLocalStorage('showSolution') // Объект {4001: true, 4002: false, 4003: false...}
        const idThisProblemHTML = parent.id // id задачи (11020, 3004 ...)        
        const thisProblem = searchObjectById(idThisProblemHTML, thisProblems) // Сама задача по индексу 
        const idThisProblem = thisProblem.id // id этой задачи
        
        objInfo[idThisProblem] = solutionImg.classList[1] === 'show' // Изменение этой задачи
        setLocalStorage('showSolution', objInfo) // Сохранение в LocalStr
    })
}



function createAndSaveAll(){
    createAndSaveColors(getThisProblems()) // Сохранение
    createAndSaveInfoAnswers(getThisProblems()) // Сохранение
    createAndSaveInputs(getThisProblems()) // Сохранение
    createAndSaveSolution(getThisProblems())
}





export { createAndSaveInfoAnswers, createAndSaveSolution, createAndSaveAll }
