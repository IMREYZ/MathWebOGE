import { getLocalStorage } from "./LocalStorage.js"
import { getColorProcent, getStar, getStatsNumberText } from "./GetLayout.js"
import { getSolution } from "./GetLayout.js"


function problemHTMLvariant(problem) { // Вывод задания на HTML на вкладку variant
    const idThisProblem = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[idThisProblem] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const solution = getSolution(problem)


    
    return `<div id = ${idThisProblem} class="conteyner">
    <div class="number gray" > 
        <span class='statsNumberConteyner'> </span>
        <span class='middle'>
            <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
            <span title='Избранное задание' class="star close"> ${textHTML} </span>
            <span class='lvll'>
                Сложность: <span class='${getColorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
            </span>
        </span>
    </div>
        <img src='/MathWeb/img/${problem.problem}.jpg'>

        <div class='imgSolutionConteyner close'>
            ${solution}
        </div>

        <div class="answer gray1">
            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
            </span>

            <span class='showSolutionText'></span>
        </div>

    </div>`
} 



function problemHTMLstress(problem) { // Вывод задание на HTML на вкладку stress
    const idThisProblem = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[idThisProblem] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const solution = getSolution(problem)


    
    return `<div id = ${idThisProblem} class="conteynerStress" >
    <div class="number gray" > 
        <span class='statsNumberConteyner'> </span>
        <span class='middle'>
            <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
            <span title='Избранное задание' class="star close"> ${textHTML} </span>
            <span class='lvll'>
                Сложность: <span class='${getColorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
            </span>
        </span>
    </div>
        <img class='imgStress' src='/MathWeb/img/${problem.problem}.jpg'>

        <div class='imgSolutionConteyner close'>
            ${solution}
        </div>

        <div class="answer gray1">

            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
                <button class="submit"> Ответить </button>
            </span>
            <span class='showSolutionText'></span>
        </div>
    </div>`
}



function problemHTMLcurr(problem) { // Вывод задания на HTML на вкладку currSubject
    const idThisProblem = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[idThisProblem] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const textStatsNumber = getStatsNumberText(problem) // StatsNumber
    const solution = getSolution(problem)
    


    return `<div id = ${idThisProblem} class="conteyner" >
    <div class="number gray" > 
        <span class='statsNumberConteyner'> ${textStatsNumber} </span>
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${getColorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWeb/img/${problem.problem}.jpg' title='Тема: ${problem.type}'>

        <div class='imgSolutionConteyner close'>
            ${solution}
        </div>

        <div class="answer gray1">
            <span class='conteynerRightAnswer'></span>

            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
                <button class="submit"> Ответить </button>
            </span>

            <span class='showSolutionText'> </span>
        </div>

    </div>`
}


export {problemHTMLcurr, problemHTMLstress, problemHTMLvariant}
