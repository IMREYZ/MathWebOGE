import { getLocalStorage } from "./LocalStorage.js"
import { getNormalClass } from "./OtherFunctions.js"


function getStar(boolean) { // Функция, которая возвращает нужную звезду
    if (boolean) return '&#9733'
    else return '&#10032'
}



function getColorProcent(procent) { // Цвет задачи
    if (procent < 30) return 'greenColor1'
    else if (procent < 70) return 'yellowColor1'
    else return 'redColor1'

}



function getStatsNumberText(problem) { // Функция, которая возвращает statsNumber
    const statsNumberLocalStr = getLocalStorage('statsNumber')
    const objThisProblem = statsNumberLocalStr[problem.id]

    return `<span class='statsNumber' title='Решаемость задания. Для сброса - нажмите 2 раза.'>  ${objThisProblem.right} из ${objThisProblem.all} (${objThisProblem.procent}%)</span>`
}



function getRightAnswerHTML(problem) { // Добавление "правильный ответ"
    const rightAnswer = String(problem.answer).replace('.', ',') // Правильный ответ

    return `<span class='showRightAnswer close'> 
        <span class='pokOtw'>Показать ответ: </span> 
        <span class='conteynerRightAnswer'> </span>
        <span class='rightAnswer close'>${rightAnswer} </span>
    </span>`
}




function getCheckboxes(themeThisProblem){
    let resultText = ``

    themeThisProblem.forEach(theme => {
        const nameNormalClass = getNormalClass(theme.name)
        resultText += `<div class='SSS'> 
                    <input class='checkbox' type='checkbox' id='${nameNormalClass}'> 
                    <span class='${nameNormalClass}'>${theme.name} (${theme.count} шт.)</span> 
                 </div>`
    })

    return resultText
}




function getSolution(problem){
    const thisSolution = problem.solution
    let result

    if (!thisSolution) {
        result = `<div id='QQ'> Решение: </div>
                  <img src='/MathWeb/img/NoSolutions.jpg' >`
    } else {
        if (thisSolution.have === true) {
            result = `<div id='QQ'> Решение: </div>
                      <img class='imgSolution' src='/MathWeb/img/${problem.problem}s.jpg' >
                      <a target="_blank" href='${problem.solution.link}'>
                        <div class='conteynerLink'>
                            <span id='QQ1'> Видеорешение </span> 
                        </div>
                      </a>`
        }

        if (thisSolution.have === false){
            const objectPrototype = thisSolution.objectPrototype
            
            result = `<div id='QQ'> Решение похожего прототипа (№${objectPrototype.id}): </div>
                  <img class='imgSolution' src='/MathWeb/img/${objectPrototype.problem}s.jpg' >
                  <a target="_blank" href='${objectPrototype.solution.link}'>
                    <div class='conteynerLink'>
                        <span id='QQ1'> Видеорешение прототипа </span> 
                    </div>
                  </a>`
        }
    }

    return result
}



export { getColorProcent, getStar, getStatsNumberText, getRightAnswerHTML, getCheckboxes, getSolution }
