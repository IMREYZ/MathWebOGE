import { summArray } from "./OtherFunctions.js"
import { pushArrayCountProblem, getObjectsFromAndTo } from "./VariantFunctions.js"


function closeToShow(element) { // close -> show
    element.classList.remove('close')
    element.classList.add('show')
}



function showToClose(element) { // show -> close
    element.classList.remove('show')
    element.classList.add('close')
}



function background(color, index) { // Смена background цвета
    const allNumbers = [...document.querySelectorAll('.number')] // Все верхние подконтейнеры контейнера
    const allAnswer = [...document.querySelectorAll('.answer')] // Все нижние подконтейнеры контейнера

    const thisNumber = allNumbers[index] // Дочерний number
    const thisAnswer = allAnswer[index] // Дочерний answer
    
    stainingBackground(thisNumber, thisAnswer, color) // Окраска
}



function backgroundByCurr(id, color) { // Смена background цвета для currSubj
    const allConteyners = [...document.querySelectorAll('.conteyner')] // Все контейнеры задач

    allConteyners.forEach(conteyner => { // Перебираем все задачи
        if (+conteyner.id === id) { // Если id задачи === нашему id, которое мы хотим найти, то
            const thisNumber = conteyner.querySelector('.number') // Дочерний number
            const thisAnswer = conteyner.querySelector('.answer') // Дочерний answer

            stainingBackground(thisNumber, thisAnswer, color) // Окраска
        }
    })
}



function stainingBackground(thisNumber, thisAnswer, color){ // Окраска
    thisNumber.classList.remove('gray', 'green', 'red') // Убираем все классы
    thisNumber.classList.add(color) // Добавляем нужный цвет

    thisAnswer.classList.remove('gray1', 'green', 'red') // Убираем все классы
    if (color === 'gray') color = 'gray1'
    thisAnswer.classList.add(color) // Добавляем нужный цвет
}



function defaultBtnVariant() { // Изменение кнопки variantBTN в обычную
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта

    variant.innerHTML = 'Составить вариант (Выбрано заданий: 0)'
    variant.disabled = true
    variant.classList.add('animation:hover')
}



function changeBtnVariant() { // Смена кнопки "Вариант" (изменение количества заданий + нажимаемость)
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта
    const startBtn = document.querySelector('.start') // Min сложность элемент
    const finishBtn = document.querySelector('.finish') // Max сложность элемент
    const hoursHTML = document.querySelector('.hours') // hours элемент
    const minutesHTML = document.querySelector('.minutes') //minttes элемент

    const arrayCountProblem = pushArrayCountProblem() // Массив кол-ва задач
    const summProblems = summArray(arrayCountProblem) // Количество задач всего
    const valueStart = +startBtn.value // Значение min
    const valueFinish = +finishBtn.value // Значение max
    const hoursValue = +hoursHTML.value // Значение hours
    const minutesValue = +minutesHTML.value // Значение minutes

    const boolArrayCountProblem = arrayCountProblem.some((element, index) => 
        index !== 0 && getObjectsFromAndTo(index, valueStart, valueFinish).length < element) // валидность arrayCountProblem
    const boolTime = hoursValue === 0 && minutesValue === 0 // 0 часов, 0 минут ?
    variant.disabled = summProblems === 0 || boolArrayCountProblem || boolTime  // Если сумма === 0 || boolArrayCountProblem || boolTime => disabled = true

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`

    if (variant.disabled) variant.classList.add('boom') // Эффект boom
    else variant.classList.remove('boom') // Эффект boom
}




export { changeBtnVariant, defaultBtnVariant, background, backgroundByCurr, showToClose, closeToShow }
