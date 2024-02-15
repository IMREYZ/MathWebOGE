if (window.location.pathname === '/MathWebDemo/HTML/stress.html'){

    // Место времени; счёт; место задачи
    const timePlace = document.querySelector('.time')
    const score = document.querySelector('.score')
    const place = document.querySelector('.place')

    // Место красного счёта (изначально скрываем)
    const refreshInfoText = document.querySelector('.conteynerTime1') 

    // При обновлении меняем timer на false
    setLocalStorage('timer', false)

    if (getLocalStorage('pause')) removeLocalStorage('pause')

    // Если нет рекорда, рекорд = 0
    if (!getLocalStorage('record')) setLocalStorage('record', 0)

    // Если нет, то score в LocalStr, иначе записываем в счёт (если обновление страницы)
    // Дописываем рекорд
    !getLocalStorage('thisScore') ? setLocalStorage('thisScore', 0) : score.innerHTML = `Текущий счёт: <span class='thisScore'>${getLocalStorage('thisScore')}</span> `
    score.innerHTML += `(Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
    

    // timer = false, когда пауза, иначе = true
    // pause - 0,35 сек


    // Если проиграл
    function endGame(){
        // Узнаем текущий счет
        const scored = +getLocalStorage('thisScore')

        // Обнуляем счетчик
        setLocalStorage('thisScore', 0)

        // Ставим красный фон + пауза
        background('red', 0)
        setLocalStorage('pause', true)

        const thisConteyner = document.querySelector('.conteynerRightAnswer')
        thisConteyner.innerHTML = getRightAnswerHTML(getLocalStorage('randomProblem'))

        const rightAnswer = document.querySelector('.showRightAnswer')
        rightAnswer.classList.remove('close')
        rightAnswer.classList.add('show')


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
        
        // Удаляем задачу из LocalStr
        removeLocalStorage('randomProblem')

        // disabled
        const inputAll = document.querySelector('.input')
        const submitAll = document.querySelector('.submit')

        inputAll.readOnly = true
        submitAll.disabled = true
        submitAll.classList.remove('button:hover')

        const conteynerInputStress = document.querySelector('.conteynerInputStress')
        conteynerInputStress.classList.add('conteynerInput')
    }

    // Если нет задачи в LocalStr
    if (!getLocalStorage('randomProblem')) {
        setLocalStorage('randomProblem', randomStress())

        // Добавляем deadLine 
        const thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')} `
        const randomProblem = getLocalStorage('randomProblem').number
        const time = timeOnProblem[randomProblem]
        setLocalStorage('deadLine', deadLine(thisTime, 0, time[0], time[1]))
    }

    // Закидываем задачу на страницу (даже при обновлении)
    place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))

    // Фокус на input
    document.querySelector('.input').focus()

    // Обновление каждую секунду
    setInterval(function() {
        // Если нет паузы и таймер = false (нет остановки), то
        if (!getLocalStorage('pause') && !getLocalStorage('timer') ){

            // Пока есть время, обновляем время
            if (!deadLineNew()){
                const thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')}`
                const result = titleTime(thisTime, getLocalStorage('deadLine'))
                let final = ''
                for (let index = 3; index < result.length; index ++) final += result[index]
            
                timePlace.innerHTML = `<span class='thisScore'> ${final} </span> осталось`
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
            const thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')} `
            
            // Узнаем deadLine новой задачи
            const randomProblem = getLocalStorage('randomProblem').number
            const time = timeOnProblem[randomProblem]
            setLocalStorage('deadLine', deadLine(thisTime, time[0], time[1]))

            // disabled
            const inputAll = document.querySelector('.input')
            const submitAll = document.querySelector('.submit')

            inputAll.readOnly = true
            submitAll.disabled = true
            submitAll.classList.remove('button:hover')

        // Если ответ НЕВЕРНЫЙ    
        } else endGame()
    }
    
    //refreshInfo.addEventListener('click', () => { location.reload() })

    document.addEventListener('click', event => {
        if (event.target.classList[0] === 'time3') location.reload()
    })


    // Если событие - кнопка submit
    document.addEventListener('click', (event) => { if (event.target.classList[0] === 'submit') sendAsnwer() })

    // Обработка по кнопке Enter
    document.addEventListener('keydown', (btn) => { if (btn.key === 'Enter') sendAsnwer() })


    // Ограничение на input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] === 'input') event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') 
    })
}
