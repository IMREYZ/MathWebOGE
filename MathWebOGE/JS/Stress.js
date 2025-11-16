import { getLocalStorage, setLocalStorage, removeLocalStorage } from "./LocalStorage.js"
import { problemHTMLstress } from "./ProblemHTML.js"
import { deadLine, titleTimeWithOutHours, deadLineNew, getTime } from "./Time.js"
import { getStatsNumberText, getRightAnswerHTML } from "./GetLayout.js"
import { background, closeToShow } from "./ChangeLayout.js"
import { randomStress } from "./OtherFunctions.js"
import { timeOnProblem } from "./Base.js"



function processStress(){

    // Место времени; счёт; место задачи
    const timePlace = document.querySelector('.time')
    const score = document.querySelector('.score')
    const place = document.querySelector('.place')

    // Место красного счёта (изначально скрываем)
    const refreshInfoText = document.querySelector('.conteynerTime1')


    // Если нет задачи в LocalStr
    if (!getLocalStorage('randomProblem')) {
        setLocalStorage('randomProblem', randomStress())

        // Добавляем deadLine 
        const thisTime = getTime('full')
        const randomProblem = getLocalStorage('randomProblem').number
        const time = timeOnProblem[randomProblem]
        if (getLocalStorage('status') !== 'afk') setLocalStorage('deadLine', deadLine(thisTime, 0, time[0], time[1]))
    }
    
    

    if (getLocalStorage('status') === 'afk'){
        viewingStress()
        
    } else {
        // При обновлении меняем timer на false
        setLocalStorage('timer', false)

        if (getLocalStorage('pause')) removeLocalStorage('pause')

        // Если нет рекорда, рекорд = 0
        if (!getLocalStorage('record')) setLocalStorage('record', 0)

        // Если нет, то score в LocalStr, иначе записываем в счёт (если обновление страницы)
        // Дописываем рекорд
        !getLocalStorage('thisScore') ? setLocalStorage('thisScore', 0) : score.innerHTML = `Текущий счёт: <span class='thisScore'>${getLocalStorage('thisScore')}</span> `
        score.innerHTML += `(Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`

        // Закидываем задачу на страницу (даже при обновлении)
        place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))

        // Фокус на input
        document.querySelector('.input').focus()
    }
    
    
    
    
    function viewingStress(){
        place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))
        
        const scored = +getLocalStorage('thisScore')
        score.innerHTML = ''
        timePlace.innerHTML = `Ваш Результат за эту попытку: <span class='thisScore'>${scored}</span> (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
        
        refreshInfoText.innerHTML = `<button class='time3'>Начать заново </button>`

        endGame()
    }
    
    
    // Если проиграл
    function endGame(){
        // Узнаем текущий счет
        const scored = +getLocalStorage('thisScore')

        // Обнуляем счетчик
        setLocalStorage('thisScore', 0)

        // Ставим красный фон + пауза
        background('red', 0)
        setLocalStorage('pause', true)

        const conteynerSolution = document.querySelector('.showSolutionText')
        conteynerSolution.innerHTML = 'Показать решение'

        const thisProblem = getLocalStorage('randomProblem')
        const statsNumberLocalStr = getLocalStorage('statsNumber')
        const thisStatsNumberObj = statsNumberLocalStr[thisProblem.id]
        const thisStatsNumber = document.querySelector('.statsNumberConteyner')

        const thisMiddle = document.querySelector('.middle')
        thisMiddle.style.left = '0px'

        const thisStar = document.querySelector('.star')
        thisStar.classList.remove('close')

        thisStatsNumber.innerHTML = getStatsNumberText(thisProblem)

        const thisConteyner = document.querySelector('.conteynerRightAnswer')
        thisConteyner.innerHTML = getRightAnswerHTML(getLocalStorage('randomProblem'))

        const rightAnswer = document.querySelector('.showRightAnswer')
        closeToShow(rightAnswer)

        const conteynerInput = document.querySelector('.conteynerInput') // conteynerInputStress --> conteynerInput
        conteynerInput.classList.add('inputConteynerInCenter') // conteynerInput --> inputConteynerInCenter
        


        thisStatsNumberObj.all ++
        thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)

        statsNumberLocalStr[thisProblem.id] = thisStatsNumberObj            
        setLocalStorage('statsNumber', statsNumberLocalStr)


        // Делаем заглушку на 0,35 сек
        setTimeout(function(){
            removeLocalStorage('pause')

            // Обновляем результат и сбрасываем счёт
            timePlace.innerHTML = `Ваш Результат за эту попытку: <span class='thisScore'>${scored}</span> (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
            score.innerHTML = ''

            // timer - заморожено
            setLocalStorage('timer', true)

            // Показываем "красное инфо"
            refreshInfoText.innerHTML = `<button class='time3'>Начать заново </button>`
        }, 500)

        const answerText = document.querySelector('.answer')
        answerText.classList.add('white')

        // disabled
        const inputAll = document.querySelector('.input')
        const submitAll = document.querySelector('.submit')

        inputAll.readOnly = true
        submitAll.disabled = true
        submitAll.classList.remove('button:hover')
        
        setLocalStorage('status', 'afk')
    }


    

    // Обновление каждую секунду
    setInterval(function() {
        // Если нет паузы и таймер = false (нет остановки), то
        if (!getLocalStorage('pause') && !getLocalStorage('timer') ){

            // Пока есть время, обновляем время
            if (!deadLineNew()){
                const thisTime = getTime('full')
                const deadline = getLocalStorage('deadLine')
                const timeLeft = titleTimeWithOutHours(thisTime, deadline)
                
                timePlace.innerHTML = `<span class='thisScore'> ${timeLeft} </span> осталось`
            }

            // Если deadLine закончился
            if (deadLineNew()) endGame()
        }
    }, 1000)   

    
    function sendAsnwer(){
        
        // Узнаем введенный ответ; текущий счет
        const inputAnswer = +document.querySelector('.input').value.replaceAll(',', '.')
        const scored = +getLocalStorage('thisScore')

        const answerText = document.querySelector('.answer')
        answerText.classList.add('white')

        const thisMiddle = document.querySelector('.middle')
        thisMiddle.style.left = '0px'
        
        // Если ответ ВЕРНЫЙ
        if (inputAnswer === getLocalStorage('randomProblem').answer){
            setLocalStorage('thisScore', scored + 1)

            if (getLocalStorage('thisScore') > getLocalStorage('record')) setLocalStorage('record', +getLocalStorage('thisScore'))

            // Меняем текущий счет
            score.innerHTML = `Счет: <span class='thisScore'>${scored + 1}</span> (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
            

            // Берем новую задачу
            setLocalStorage('randomProblem', randomStress())

            // Ставим зеленый фон + пауза
            background('green', 0)
            setLocalStorage('pause', true)

            // Делаем заглушку на 0,85 сек
            setTimeout(function(){
                place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))

                document.querySelector('.input').focus()
                removeLocalStorage('pause')
            }, 500)

            // Формируем дату для дедлайна (текущее время)
            const thisTime = getTime('full')
            
            // Узнаем deadLine новой задачи
            const randomProblem = getLocalStorage('randomProblem').number
            const time = timeOnProblem[randomProblem]
            setLocalStorage('deadLine', deadLine(thisTime, 0, time[0], time[1]))

            // disabled
            const inputAll = document.querySelector('.input')
            const submitAll = document.querySelector('.submit')

            inputAll.readOnly = true
            submitAll.disabled = true
            submitAll.classList.remove('button:hover')

            const thisProblem = getLocalStorage('randomProblem')
            const statsNumberLocalStr = getLocalStorage('statsNumber')
            const thisStatsNumberObj = statsNumberLocalStr[thisProblem.id]
            const thisStatsNumber = document.querySelector('.statsNumberConteyner')
        
            thisStatsNumberObj.right ++
            thisStatsNumberObj.all ++
            thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)

            statsNumberLocalStr[thisProblem.id] = thisStatsNumberObj            
            setLocalStorage('statsNumber', statsNumberLocalStr)
            
            thisStatsNumber.innerHTML = getStatsNumberText(thisProblem)



        // Если ответ НЕВЕРНЫЙ    
        } else endGame()
    }
    

    document.addEventListener('click', event => {
        if (event.target.classList[0] === 'time3') {
            location.reload()
            removeLocalStorage('status')
            
            // Удаляем задачу из LocalStr
            removeLocalStorage('randomProblem')
        }
    })


    
    
    // Если событие - кнопка submit
    document.addEventListener('click', event => { 
        if (event.target.classList[0] === 'submit') sendAsnwer() 
    })

    // Обработка по кнопке Enter
    document.addEventListener('keydown', button => { if (button.key === 'Enter') sendAsnwer() })


    // Ограничение на input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] === 'input') event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') 
    })
}

export { processStress }
