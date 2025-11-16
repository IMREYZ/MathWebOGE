import { getLocalStorage, setLocalStorage, removeLocalStorage } from "./LocalStorage.js"
import { problemHTMLvariant } from "./ProblemHTML.js"
import { time, getTime } from "./Time.js"
import { getAllProblemMain, getPreviousAnswers, getNameVariant } from "./GetVariableForVariant.js"
import { popUpProcces } from "./PopUp.js"
import { viewingVariant } from "./ViewingVariant.js"
import { createAndSaveInfoAnswers, createAndSaveSolution } from "./SaveProblem.js"
import { currInfoShowRightAnswer, currSolution } from "./CurrProblem.js"




function processVariant(){
    const allConteynerVariant = document.querySelector('.allConteynerVar') // Контейнер всех заданий
    const nameVariant = document.querySelector('.nameVariant') // Имя варианта
    const allProblemMain = getAllProblemMain() // Массив, состоящий из объектов заданий
    const previousAnswers = getPreviousAnswers()        

    setLocalStorage('variant', allProblemMain) // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)
    nameVariant.innerHTML = getNameVariant()


    removeLocalStorage('flagEndVariant') // Убирание заглушки, из-за которой не выходят много "результатов"
    setLocalStorage('variant', allProblemMain) // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)
    if (!getLocalStorage('startTime') && !getLocalStorage('fromStats')) setLocalStorage('startTime', getTime('full'))
    if (!getLocalStorage('againVariant')) setLocalStorage('againVariant', 'deadLinePicked')

    allProblemMain.forEach((problem, id) => allConteynerVariant.innerHTML += problemHTMLvariant(problem, id)) // Выводим задания на страницу

    const inputVariant = [...document.querySelectorAll('.input')]
    if (previousAnswers) inputVariant.forEach((input, index) => input.value = previousAnswers[index]) // Вывод ответов
        
    
    popUpProcces()
    viewingVariant() // Если связано с просмотром варианта
    time()

    createAndSaveInfoAnswers(allProblemMain)
    createAndSaveSolution(allProblemMain)
    currInfoShowRightAnswer(allProblemMain)
    currSolution(allProblemMain) 


    document.addEventListener('click', event => { // Обработка события - нажатие на "обновить страницу"
        if (event.target.classList[0] === 'time2') {
            if (getLocalStorage('fromStats') === 1) setLocalStorage('fromStats', 0)
            if (getLocalStorage('endVariant') === 1) setLocalStorage('endVariant', 0)
            if (getLocalStorage('timeOnVariant') === 'no deadline') setLocalStorage('againVariant', 'deadLinePicked')

            setLocalStorage('repeatVariant', true)
            removeLocalStorage('currInfoShowRightAnswer')
            removeLocalStorage('showSolution')

            location.reload() 
        }
    })


    document.addEventListener('input', event => { 
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') // Ограничение на input
        
        const answer = []
        const inputVariant = [...document.querySelectorAll('.input')]
        
        inputVariant.forEach(input => answer.push(input.value))
        setLocalStorage('answers', answer) // Сохраняем ответы в LocalStr
    })       
}

export { processVariant }
