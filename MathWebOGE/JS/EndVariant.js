import { getLocalStorage, setLocalStorage } from "./LocalStorage.js"
import { textPopUp, textPopUpFull, addPopUp } from "./PopUp.js"
import { getStatsNumberText, getRightAnswerHTML } from "./GetLayout.js"
import { background, closeToShow } from "./ChangeLayout.js"
import { specialVariants, secondBallArray } from "./Base.js"
import { getAllProblemMain, getArrayCountProblem, getIsVariant } from "./GetVariableForVariant.js"



function endVariant(){ // Конец варианта

    const allProblemMain = getAllProblemMain() // Массив, состоящий из объектов заданий
    const arrayCountProblem = getArrayCountProblem() // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    const isVariant = getIsVariant()

    const timePlace = document.querySelector('.time1') // Место времени
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const acceptBtn = document.querySelector('.accept') // Кнопка принятия
    const popUpSecond = document.querySelector('.pop_up1') // PopUp - подтверждение
    const inputVariant = [...document.querySelectorAll('.input')] // Все input
    const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
    const allAnswer = [...document.querySelectorAll('.answer')] // Все answer

    let countRightAnswer = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Количество верных задач "['-', new Array(11).fill(100)].flat(1)"
    let rightAnswers = 0 // Количество правильных ответов
    let arrayAnswer = [] // Массив input ответов
    let arrayColors = []
    inputVariant.forEach(input => arrayAnswer.push(input.value)) // Введенные ответы
  
    setLocalStorage('againVariant', 'afk') // Смена режима в afk
    setLocalStorage('endVariant', 1) // Смена режима в afk

    timePlace.innerHTML = `<button class='time2'>Начать заново </button>`;// Уведомление для пользователей за место времени
    iconText.innerHTML = 'Результат'
    acceptBtn.disabled = true // Блокируем "завершить работу"
  

    
    function checkEveryProblems(){
        arrayAnswer.forEach((answer, index) => { // Проходимся по массиву answer
            const thisObject = allProblemMain[index] // Текущая задача
            const thisParent = allParents[index] // Родитель этой задачи
            const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
            const thisInput = thisParent.querySelector('.input')
            const thisSolutionText = thisParent.querySelector('.showSolutionText')
            const thisStatsNumberConteyner = thisParent.querySelector('.statsNumberConteyner')
            const thisMiddle = thisParent.querySelector('.middle')
            const inputConteyner = thisParent.querySelector('.conteynerInput')
            const thisAnswer = allAnswer[index]
            const statsNumberLocalStr = getLocalStorage('statsNumber')
            const thisStatsNumberObj = statsNumberLocalStr[thisObject.id]

            thisMiddle.style.left = '0px'
            thisStar.classList.remove('close') // Удаляем close звезде
            thisInput.readOnly = true
            thisAnswer.classList.add('white') // Добавляем white
                
            if (answer !== '' && +answer.replace(',', '.') === thisObject.answer){ // Проверка на правильность ответа
                rightAnswers ++ // Количество правильных ответов ++ 
                countRightAnswer[thisObject.number] ++ // Количество правильных ответов задачи номера n ++
                background('green', index) // background - green
                arrayColors.push('green') // В массив цветов += green

                thisStatsNumberObj.right ++
                thisStatsNumberObj.all ++
                thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)

            } else {
                background('red', index) // background - red
                arrayColors.push('red') // В массив цветов += red

                const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                thisConteyner.innerHTML = getRightAnswerHTML(allProblemMain[index]) // Записываем туда getRightAnswerHTML()
                const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                closeToShow(rightAnswer)
                thisSolutionText.innerHTML = 'Показать решение'

                rightAnswer.style.right = '310px' // ВЕРСТКА
                thisSolutionText.style.left = '270px' // ВЕРСТКА
                inputConteyner.style.left = '13px'

                thisStatsNumberObj.all ++
                thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)
            }

            statsNumberLocalStr[thisObject.id] = thisStatsNumberObj            
            setLocalStorage('statsNumber', statsNumberLocalStr)
                
            thisStatsNumberConteyner.innerHTML = getStatsNumberText(thisObject)
        })

        setLocalStorage('colors', arrayColors) // Добавляем цвета в LocalSte
    }

    //


    // Сохранение для stats
    function saveStats(){
        let infoLocalStorageObject = {} // Объект текущего варианта
        let arrayRightAnswer = [] // Массив статистики
            
        for (let index = 1; index <= 12; index ++) arrayRightAnswer.push({right: countRightAnswer[index], count: arrayCountProblem[index]}) // Для каждой задачи right, count
        arrayRightAnswer.push({right: rightAnswers, count: arrayAnswer.length}) // Для всего варианта right, count

        const stats = getLocalStorage('stats') // Массив вариантов
        const numberVariant = getLocalStorage('numberVariant') // Номер варианта (не просмотр)
        let nameVariant

        if (!getLocalStorage('countSpecialVariant')) setLocalStorage('countSpecialVariant', 0)
        if (!getLocalStorage('countDefaultVariant')) setLocalStorage('countDefaultVariant', 0)
        if (!getLocalStorage('countVariant')) setLocalStorage('countVariant', 0)
        setLocalStorage('countVariant', getLocalStorage('countVariant') + 1)

        
        if (numberVariant === null) { // Если "просмотр"
            stats.forEach(variant => {
                if (variant.idVariant === getLocalStorage('idVariant')) {
                    nameVariant = variant.name
                }
            })    
            
        } else if (getLocalStorage('repeatVariant')) { 
            nameVariant = stats[stats.length - 1].name

        } else {
            
            if (numberVariant > 0 && numberVariant) nameVariant = specialVariants[numberVariant].name
            else if (numberVariant === -1) {
                setLocalStorage('countSpecialVariant', getLocalStorage('countSpecialVariant') + 1)
                nameVariant = `Избранные задания ${getLocalStorage('countSpecialVariant')}` 
            } else if (numberVariant === 0) {
                setLocalStorage('countDefaultVariant', getLocalStorage('countDefaultVariant') + 1)
                nameVariant = `Вариант ${getLocalStorage('countDefaultVariant')}`
            }
        }



        infoLocalStorageObject = {
            stats: arrayRightAnswer,
            problems: getLocalStorage('variant'), // Добавляем вариант
            colors: getLocalStorage('colors'), // Добавляем цвета
            idVariant: getLocalStorage('countVariant'), // Добавляем id задачи как len stats + 1
            countProblem: arrayCountProblem, // Количество проблем (для таблицы)
            answers: arrayAnswer,
            name: nameVariant
        }
        

        let arrayInfo = []
        if (stats) arrayInfo = [...stats, infoLocalStorageObject]
        else arrayInfo = [infoLocalStorageObject]        
        setLocalStorage('stats', arrayInfo) // В LocalStr
    }


    checkEveryProblems()
    saveStats()


    // Смотрим на формат варианта, такой PopUp и выдаем (с "формат ЕГЭ (1-11) или без")
    if (isVariant) addPopUp(textPopUpFull, arrayAnswer, rightAnswers, secondBallArray) 
    else addPopUp(textPopUp, arrayAnswer, rightAnswers)
    popUpSecond.classList.remove('active')
}

export { endVariant }
