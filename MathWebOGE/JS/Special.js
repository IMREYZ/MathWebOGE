import { currAll } from "./CurrProblem.js"
import { createAndSaveAll } from "./SaveProblem.js"
import { problemHTMLcurr } from "./ProblemHTML.js"
import { getSpecialObject } from "./OtherFunctions.js"
import { getCountProblemForVariant } from "./VariantFunctions.js"
import { setLocalStorage } from "./LocalStorage.js"


function processSpecial(){

    const conteynerAll = document.querySelector('.conteynerAll')  
    const arraySpecialObject = getSpecialObject()
    const createVariantBtn = document.querySelector('.goVariant')

    arraySpecialObject.forEach(problem => conteynerAll.innerHTML += problemHTMLcurr(problem))

    // Создание и/или сохранение 1) цветов 2) "показать ответ"  3) input
    createAndSaveAll()

    // Возвращаем цвета и инпуты в случае инпута
    currAll()

    if (getSpecialObject().length === 0) createVariantBtn.disabled = 'true'



    document.addEventListener('click', event => { //
        if (event.target.classList[0] !== 'star') return // Если не "звезда" - выходим
        
        conteynerAll.innerHTML = ''       
        getSpecialObject().forEach(problem => conteynerAll.innerHTML += problemHTMLcurr(problem))

        currAll()

        if (getSpecialObject().length === 0) createVariantBtn.disabled = 'true'
    })



    createVariantBtn.addEventListener('click', () => {
        const arrayCountProblem = getCountProblemForVariant(getSpecialObject())
        
        setLocalStorage('countProblem', arrayCountProblem)
        setLocalStorage('numberVariant', -1)
    })



    document.addEventListener('input', event => {
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
    })    
}

export {processSpecial}
