import { getLocalStorage, setLocalStorage } from "./LocalStorage.js"
import { allProblems } from "./Base.js"
import { currAll } from "./CurrProblem.js"
import { getThisProblems } from "./LocalStorage.js"
import { problemHTMLcurr } from "./ProblemHTML.js"

function randomStress() { // Рандомный индекс массива allProblems (для stress)
    const randomIndex = Math.floor(Math.random() * allProblems.length)
    return allProblems[randomIndex]
}

function addZero(node) { return +node < 10 ? '0' + node : node } // Функция для времени №3     '4' --> '04'; '23' --> '23'


function rounded(number) { // Округление до сотых
    return +number.toFixed(2);
}

function summArray(array) { // Сумма массива
    let sum = 0

    array.forEach((element, index) => { 
        if (index != 0) sum += element 
    })

    return sum
}

function searchObjectById(searchId, array) { // Ищем объект-задачу по id 
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === +searchId) return array[index]
    }
}



function searchObjectByProblem(searchProblem, array) { // Ищем объект-задачу по id 
    for (let index = 0; index < array.length; index ++) {
        if (array[index].problem === searchProblem) return array[index]
    }
}


function procentRight(right, all){
    if (all === 0) return '-'

    return parseInt(right / all * 100)
}


function weight900(node, boolean) { // add/remove w900
    const thisNode = document.querySelector(`.${node}`) // Наш компонент

    if (boolean) thisNode.classList.add('w900') // Если true - добавляем, иначе убираем
    else thisNode.classList.remove('w900')
}


function withOutBadZero(text) { // Функция, которая убирает незнач. нули
    const resultText = text ? +text : ''
    return resultText
}


function getNormalClass(text) { // Функция, которая возвращает класс без пробелов ('ААА, БББ' --> 'АААL_БББ')
    const splitText = text.split(' ') // Разделяем по пробелам
    if (splitText.length === 1) return text // |text| === 1 

    let result = ''
    splitText.forEach((element, index) => result += element + (index !== splitText.length - 1 ? '_' : '')) // К каждому слову добавялем _, если слово не в конце
    result = result.replaceAll(',', 'L') // , --> L
    return result
}



function getSpecialClass(text) { return text.replaceAll('_', ' ').replaceAll('L', ',') } // 'АААL_БББ' --> 'ААА, БББ'





function getSpecialObject() { // Забираем избранные задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач 
    let result = []

    allProblems.forEach(problem => { // Перебираем все задачи
        const idThisProblem = problem.id // id этой задачи
        if (objSpecial[idThisProblem]) result.push(problem) // Если id: true --> добавляем
    })

    return result
}

// function DEMO(){ //СОРТИРОВКА НЕ ДОДЕЛАНА
//     document.addEventListener('click', event => {
//         if (event.target.classList[0] !== 'submit' || window.location.pathname !== `/MathWeb/HTML/currSubject.html`) return


//         if (getLocalStorage('select') === 'userEasyToHard' || getLocalStorage('select') === 'userHardToEasy') {
//             const statsNumberLocalStr = getLocalStorage('statsNumber')

//             const thisProblems = getThisProblems()

//             thisProblems.forEach(problem => problem.stats = statsNumberLocalStr[problem.id])
//             const sortedArray = thisProblems.sort((a, b) => b.stats.procent - a.stats.procent)

//             setLocalStorage('thisProblems', sortedArray)

//             const allConteynerProblem = document.querySelector('.allConteynerPr') // Имя задачи
//             allConteynerProblem.innerHTML = ''
//             getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element)) // Выводим задания

//             currAll()
//         }
//     })

//     document.addEventListener('dblclick', event => {
//         if (event.target.classList[0] !== 'statsNumber' || window.location.pathname !== `/MathWeb/HTML/currSubject.html`) return


//         if (getLocalStorage('select') === 'userEasyToHard' || getLocalStorage('select') === 'userHardToEasy') {
//             const statsNumberLocalStr = getLocalStorage('statsNumber')

//             const thisProblems = getThisProblems()

//             thisProblems.forEach(problem => problem.stats = statsNumberLocalStr[problem.id])
//             const sortedArray = thisProblems.sort((a, b) => b.stats.procent - a.stats.procent)

//             setLocalStorage('thisProblems', sortedArray)

//             const allConteynerProblem = document.querySelector('.allConteynerPr') // Имя задачи
//             allConteynerProblem.innerHTML = ''
//             getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element)) // Выводим задания

//             currAll()
//         }
//     })
// }


export { procentRight, getNormalClass, getSpecialClass, getSpecialObject, weight900, withOutBadZero, randomStress, addZero, rounded, summArray, searchObjectById, searchObjectByProblem }

