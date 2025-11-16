import { getLocalStorage, setLocalStorage, removeLocalStorage } from "./LocalStorage.js"
import { showToClose, closeToShow } from "./ChangeLayout.js"
import { allProblems } from "./Base.js"


function renderSpecial() { // Отловка новых заданий и записывание их в special
    const specialArray = getLocalStorage('special')

    if (!specialArray) return

    const haveVectors = specialArray['2150'] === undefined    
    
    if (haveVectors) { // Есть вектора
        allProblems.forEach(problem => {
            const thisId = problem.id
            if (specialArray[thisId] === undefined) specialArray[thisId] = false
        })

        setLocalStorage('special', specialArray)
    } 


    if (!haveVectors){ // Нет векторов
        const newSpecial = {}       

        allProblems.forEach(element => {
            const problemThisElement = element.problem.split('.')
            const [number, problem] = [+problemThisElement[0], +problemThisElement[1]]

            if (number === 1) newSpecial[element.id] = specialArray[element.id]
            if (number === 2) newSpecial[element.id] = false
            if (number >= 3) newSpecial[element.id] = specialArray[1000 * (number - 1) + problem]
        })

        setLocalStorage('special', newSpecial)
    }
}


function renderStatsNumber() { // Отловка новых заданий и записывание их в statsNumber
    const statsArray = getLocalStorage('statsNumber')

    if (!statsArray) return

    const haveVectors = statsArray['2150'] === undefined

    if (haveVectors) { // Есть вектора
        allProblems.forEach(problem => {
            const thisId = problem.id
            if (statsArray[thisId] === undefined) statsArray[thisId] = { right: 0, all: 0, procent: 0 }
        })

        setLocalStorage('statsNumber', statsArray)
    }

    if (!haveVectors) { // Нет векторов
        const newStats = {}

        allProblems.forEach(element => {
            const problemThisElement = element.problem.split('.')
            const [number, problem] = [+problemThisElement[0], +problemThisElement[1]]

            if (number === 1) newStats[element.id] = statsArray[element.id]
            if (number === 2) newStats[element.id] = {right: 0, all: 0, procent: 0}
            if (number >= 3) newStats[element.id] = statsArray[1000 * (number - 1) + problem]
        })

        setLocalStorage('statsNumber', newStats)
    }  
}


function clearStatsByDblClick() { // Удаление статистики при двойном клике
    document.addEventListener('dblclick', event => {
        if (event.target.classList[0] !== 'statsNumber') return

        const parent = event.target.closest('.conteyner')
        const id = parent.id
        const numberStatsLocStr = getLocalStorage('statsNumber')

        numberStatsLocStr[id] = { right: 0, all: 0, procent: 0 }
        setLocalStorage('statsNumber', numberStatsLocStr)
        event.target.innerHTML = '0 из 0 (0%)'
    })
}




function deleteOldStats() { // Удаление плохой статистики
    const stats = getLocalStorage('stats') // Наша статистика
    let newStats = []

    if (stats) { // Если статистика есть
        stats.forEach(variant => {
            if (variant.countProblem) {
                const haveVectors = !!variant.stats[12]
                
                if (!haveVectors){
                    for (let problem = 12; problem >= 2; problem --){
                        variant.stats[problem] = variant.stats[problem - 1]
                    }

                    variant.stats[1] = {right: 0, count: 0}
                }
                
                newStats.push(variant)
            }
        })

        setLocalStorage('stats', newStats)

        if (stats.length === 0) removeLocalStorage('stats')
    }
}

function showRightAnswerHTML() { // Показ правильного ответа
    document.addEventListener('click', event => { // Обработка события - нажание на "показать правильный ответ"
        if (event.target.classList[0] !== 'pokOtw') return // Если не кнопка "показать ответ" - выходим

        const conteynerAnswer = event.target.closest('.conteynerRightAnswer') // Контейнер правильного ответа
        const rightAnswer = conteynerAnswer.querySelector('.rightAnswer') // Правильный ответ (14, -4.51)
        const showAnswer = conteynerAnswer.querySelector('.pokOtw') // Текст-кнопка (Показать/Скрыть ответ)


        // close <--> show
        if (rightAnswer.classList[1] === 'close') {
            closeToShow(rightAnswer)
            showAnswer.innerHTML = 'Скрыть ответ:'

        } else {
            showToClose(rightAnswer)
            showAnswer.innerHTML = 'Показать ответ:'
        }
    })
}

export { renderSpecial, renderStatsNumber, clearStatsByDblClick, deleteOldStats, showRightAnswerHTML }
