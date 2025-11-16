import { getLocalStorage, setLocalStorage } from "./LocalStorage.js"
import { background, closeToShow } from "./ChangeLayout.js"
import { getStatsNumberText, getRightAnswerHTML } from "./GetLayout.js"
import { getMyVariantPrevious, getAllProblemMain } from "./GetVariableForVariant.js"
import { getTime } from "./Time.js"


function viewingVariant(){
    const timePlace = document.querySelector('.time1') // Место времени
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения


    if (getLocalStorage('fromStats') !== null || getLocalStorage('endVariant') !== null){
        
        if ((!getLocalStorage('fromStats') && getLocalStorage('endVariant') === 0)) setLocalStorage('startTime', getTime('full')) // Просмотр --> решение

        else if (getLocalStorage('fromStats') === 1 || getLocalStorage('endVariant') === 1) { // Только зашли на страницу
            const inputVariant = [...document.querySelectorAll('.input')] // input варианта
            const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
            const allAnswer = [...document.querySelectorAll('.answer')] // answer варианта (для white)
            const [myVariant, myColors] = getMyVariantAndMyColors()
            const allProblemMain = getAllProblemMain()

            timePlace.innerHTML = `<button class='time2'>Начать заново </button>` // имитация законченного варианта
            iconText.innerHTML = 'Результат' // имитация законченного варианта
            
            setLocalStorage('againVariant', 'afk') // afk режим        // setLocalStorage('fromStats', 0) // Переход в просмотр
            setLocalStorage('variant', myVariant)


            for (let index = 0; index < myVariant.length; index ++) {
                background(myColors[index], index) // Ставим цвет контейнеру
                inputVariant[index].readOnly = true // Только чтение
                allAnswer[index].classList.add('white') // white

                const thisProblem = myVariant[index]
                const thisParent = allParents[index] // Родитель этой задачи
                const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
                const thisStatsNumberConteyner = thisParent.querySelector('.statsNumberConteyner')
                const thisAnswerText = thisParent.querySelector('.showSolutionText')
                const thisMiddle = thisParent.querySelector('.middle')
                const thisInputConteyner = thisParent.querySelector('.conteynerInput')

                thisMiddle.style.left = '0px'
                thisStar.classList.remove('close') // Удаляем close звезде
                thisStatsNumberConteyner.innerHTML = getStatsNumberText(thisProblem)

                if (myColors[index] === 'red') {
                    const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                    thisConteyner.innerHTML = getRightAnswerHTML(allProblemMain[index]) // Записываем туда getRightAnswerHTML()
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                    closeToShow(rightAnswer)
                    thisAnswerText.innerHTML = 'Показать решение'

                    rightAnswer.style.right = '310px'
                    thisAnswerText.style.left = '270px'
                    thisInputConteyner.style.left = '13px'        
                }
            }

            acceptBtn.disabled = true // Блокируем "завершить работу"
        }
    }
}



function getMyVariantAndMyColors(){
    const myVariantPrevious = getMyVariantPrevious()
    let myVariant
    let myColors


    if (getLocalStorage('fromStats') === 1){
        myVariant = myVariantPrevious.problems // Задачи варианта
        myColors = myVariantPrevious.colors // Цвета варианта
    }

    if (getLocalStorage('endVariant') === 1){
        myVariant = getLocalStorage('variant')
        myColors = getLocalStorage('colors')
    }

    return [myVariant, myColors]
}




export { viewingVariant }