import { getLocalStorage, getThisProblems } from "./LocalStorage.js"
import { getRightAnswerHTML } from "./GetLayout.js"
import { backgroundByCurr, closeToShow } from "./ChangeLayout.js"



function currColor(thisProblems){ // Появление цвета в currSubject в случае обновления страницы

    // КОТОРЫЕ ЕСТЬ НА СТРАНИЦЕ
    // const inputAll = document.querySelectorAll('.input') // Все input
    // const submitAll = document.querySelectorAll('.submit') // Все sumbit
    const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
    const allAnswer = [...document.querySelectorAll('.answer')] // Все контейнеры answer


    if (getLocalStorage('color')){ // Если до этого были цвета карточек

        thisProblems.forEach((problem, count) => {  // Проходимся по всем текущий задачам
            const thisColor = getLocalStorage('color')[problem.id] // Текущий цвет
            const parent = allParents[count] // Родитель текущей задачи
            const idProblem = +parent.id // id родителя (для задачи 11.20 id = 11020)
            const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer') // Берем контейнер "показать ответ" у контейнера всей задачи
                       
            if (thisColor === 'green'){ // Если зеленый        
                backgroundByCurr(idProblem, 'green') // Устанавливаем зеленый цвет для задачи с id контейнера
                // inputAll[count].readOnly = true // Работаем с input и sumbit [count]
                // submitAll[count].disabled = true // Работаем с input и sumbit [count]
                // submitAll[count].classList.remove('button:hover') // Работаем с input и sumbit [count]
                allAnswer[count].classList.add('white') // Добавляем белый цвет
             
            } else if (thisColor === 'red') { // Если красный
                const conteynerInput = parent.querySelector('.conteynerInput')
                const conteynerShowSolution = parent.querySelector('.showSolutionText')

                backgroundByCurr(idProblem, 'red') // Устанавливаем красный цвет для задачи с id контейнера
                conteynerRightAnswer.innerHTML = getRightAnswerHTML(thisProblems[count]) // Добавляем 'показать ответ'
                const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer')
                closeToShow(rightAnswer) // Показываем "показать ответ"

                conteynerInput.style.left = '13px' // ВЕРСТКА               
                conteynerShowSolution.innerHTML = `Показать решение` // Добавляем "показать решение"
                allAnswer[count].classList.add('white') // Добавляем белый цвет

            } else backgroundByCurr(idProblem, 'gray')          
        })
    }
}




function currInput(thisProblems){ // Появление input в currSubject в случае обновления страницы
    const inputAll = document.querySelectorAll('.input') // Берем все input со страницы, КОТОРЫЕ ЕСТЬ НА СТРАНИЦЕ
    const inputLocalStr = getLocalStorage('inputCurr')
    const colorLocalStr = getLocalStorage('color')    

    if (inputLocalStr){ // Если до этого были введены ответы 
        thisProblems.forEach((problem, count) => {
            
            const thisId = problem.id // id Задачи
            const thisInput = inputLocalStr[thisId] // input этой задачи

            if (colorLocalStr[thisId] !== 'green') inputAll[count].value = thisInput // Передаем сохраненное значение
        })
    }
}




function currInfoShowRightAnswer(thisProblems){ // Обновление информации "показать ответ" при обновлении
    const infoShowRightAnswer = getLocalStorage('currInfoShowRightAnswer') // Информация об Показании ответа

    if (infoShowRightAnswer){ // Если в LocalStr есть currInfoShowRightAnswer
        const allConteynerRightAnswer = [...document.querySelectorAll('.conteyner')]// Контейнеры всех задач

        thisProblems.forEach((problem, count) => { // Проходимся по всем задачам
            const thisId = problem.id // id Задачи
            const thisBoolean = infoShowRightAnswer[thisId] // true/false
            
            if (thisBoolean){ // Если true, то
                const thisConteyner = allConteynerRightAnswer[count] // Текущий контейнер
                const thisInfoAnswer = thisConteyner.querySelector('.rightAnswer') // Ответ-HTML этого контейнера
                const thisPokOtw = thisConteyner.querySelector('.pokOtw') // Надпись-кнопка
                                
                closeToShow(thisInfoAnswer) // close --> show
                thisPokOtw.innerHTML = 'Скрыть ответ: '
            } 
        })
    }
}




function currSolution(thisProblems){ // Обновление информации "показать решение" при обновлении
    const objBoolSolution = getLocalStorage('showSolution')

    if (objBoolSolution){
        const allConteyner = document.querySelectorAll('.conteyner') // Контейнеры всех задач

        thisProblems.forEach((problem, index) => {
            const idThisProblem = problem.id
            const valueInObj = objBoolSolution[idThisProblem]

            if (valueInObj) {
                const thisConteyner = allConteyner[index]
                const thisImgSolution = thisConteyner.querySelector('.imgSolutionConteyner')
                const thisShowSolutionText = thisConteyner.querySelector('.showSolutionText')

                closeToShow(thisImgSolution)
                thisShowSolutionText.innerHTML = 'Скрыть решение'
            }
        })
    }
}




function currAll(){ // Вызов всех curr
    currColor(getThisProblems()) // Сохранение
    currInfoShowRightAnswer(getThisProblems()) // Сохранение
    currInput(getThisProblems()) // Сохранение
    currSolution(getThisProblems())
}



export { currInfoShowRightAnswer, currAll, currSolution }
