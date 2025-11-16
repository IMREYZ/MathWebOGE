import { getLocalStorage, setLocalStorage} from "./LocalStorage.js"
import { getStar } from "./GetLayout.js"
import { showToClose, closeToShow } from "./ChangeLayout.js"


function eventClickOnStar() { // Функция, которая меняет звезду и special в LocalStr
    document.addEventListener('click', event => { // Обработка события - нажатие на звезду
        if (event.target.classList[0] !== 'star') return // Если не "звезда" - выходим

        let parent = event.target.closest('.conteyner') // Родитель звезды
        if (!parent) parent = event.target.closest('.conteynerStress') // Родитель звезды для другого названия

        const objSpecial = getLocalStorage('special') // Массив избранных задач
        const idThisParent = +parent.id // id звезды
        const thisBoolean = objSpecial[idThisParent] // Избранная задача или нет
        const resultBoolean = !thisBoolean // true <--> false

        objSpecial[idThisParent] = resultBoolean // true <--> false в objSpecial
        setLocalStorage('special', objSpecial) // objSpecial в LocalStr 'special'

        const starHTML = parent.querySelector('.star') // Звезда
        starHTML.innerHTML = getStar(resultBoolean) // Меняем звезду
    })
}


function eventSolution() { // Обработка события нажатия на "показать решение"
    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'showSolutionText') return

        let conteyner = event.target.closest('.conteyner') // Контейнер всего задания
        if (!conteyner) conteyner = event.target.closest('.conteynerStress')


        const imgSolution = conteyner.querySelector('.imgSolutionConteyner')
        const solutionText = conteyner.querySelector('.showSolutionText')

        if (imgSolution.classList[1] === 'close') {
            closeToShow(imgSolution)
            solutionText.innerHTML = `Скрыть решение`

        } else {
            showToClose(imgSolution)
            solutionText.innerHTML = `Показать решение`
        }

    })
}

export { eventClickOnStar, eventSolution }