if (window.location.pathname === `/MathWebDemo/HTML/variant.html`){

    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения
    const allConteynerVariant = document.querySelector('.allConteynerVar') // Контейнер всех заданий
    const timePlace = document.querySelector('.time1') // Место времени
    const nameVariant = document.querySelector('.nameVariant') // Имя варианта
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const numberVariant = getLocalStorage('numberVariant') // id Варианта

    let allProblemsMain = [] // Массив, состоящий из объектов заданий
    let arrayCountProblem // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    const idPreviousVariant = getLocalStorage('idVariant') // id Варианта (прошлый вариант)
    const allStats = getLocalStorage('stats') // Вся статистика

    let myVariantPrevious
    if (idPreviousVariant !== null) {
        allStats.forEach(variant => {
            if (variant.idVariant === idPreviousVariant) myVariantPrevious = variant
        })
    }
    

    if (getLocalStorage('variantEnd') === false) {
        window.location.pathname = `/MathWebDemo/HTML/secondPart.html`
    }

    
    if (!getLocalStorage('startTime') && !getLocalStorage('fromStats')) setLocalStorage('startTime', getTime('full'))

    removeLocalStorage('flagEndVariant') // Убирание заглушки, из-за которой не выходят много "результатов"


    if (getLocalStorage('secondPart') === 0.5) removeLocalStorage('secondPart')
    if (getLocalStorage('secondPart') === 1) setLocalStorage('secondPart', 0.5)

    // arrayCountProblem
    if (numberVariant === 0 && getLocalStorage('fromStats') === null) { // Если создан вариант рандомно - берем из index countProblem
        arrayCountProblem = getLocalStorage('countProblem')

    } else if (getLocalStorage('fromStats') !== null) { // Если "просмотр" варианта
        arrayCountProblem = myVariantPrevious.countProblem

    } else if (numberVariant !== 0) { // Если специальный вариант
        arrayCountProblem = specialVariants[numberVariant].countProblem
    }

    
    // allProblemsMain
    if (getLocalStorage('variant')){ // Если уже есть вариант
        allProblemsMain = getLocalStorage('variant') // Массив заданий при обновлении           
        if (getLocalStorage('againVariant') === 'afk' && getLocalStorage('secondPart') === null && getLocalStorage('variantEnd') !== false) removeLocalStorage('answers') // Стирание ответов при новом старом вариате

    } else if (getLocalStorage('fromStats') !== 1) { // Если только создался (кнопкой создания варианта)
        numberVariant === 0 ? allProblemsMain = randomVariant(arrayCountProblem) : allProblemsMain = getArrayObjectForSpecialVariants(numberVariant)
    
    } else allProblemsMain = myVariantPrevious.problems // Если только создался (просматриванием варианта)
    
    


    allProblemsMain.forEach((element, index) => {      
        if (element.number <= 11) allConteynerVariant.innerHTML += problemHTMLvariant(element)
        else if (getLocalStorage('fromStats') === 1 || getLocalStorage('secondPart') === 0.5 || getLocalStorage('demo') === 1) {
            allConteynerVariant.innerHTML += problemHTMLcheckSecondVariant(element, index) 
        }
        else allConteynerVariant.innerHTML += problemHTMLvariantSecondPart(element, index)
    }) // Выводим задания на страницу

    if (getLocalStorage('secondPart') === 0.5){
        const allConteyners = document.querySelectorAll('.conteyner')
        allConteyners.forEach(element => {
            const thisObj = searchObjectById(+element.id, allProblems)
            
            if (thisObj.number >= 12) {
                const img = element.querySelector('.rightPhoto')
                const answerConteyner = element.querySelector('.answer')
                const r = element.querySelector('.radioButtons')
                const pokOtw2 = element.querySelector('.pokOtw2')

                const w = element.querySelector('.wwww')

                
                const h = +img.naturalHeight + 30
                                
                pokOtw2.style.top = `${(h - 60) / 2}px`
                answerConteyner.style.height = `${h}px`
                r.style.top = `${h - 40}px`
                w.style.bottom = `${(h - 30) / 2}px` 
            }
        })
    }

    setLocalStorage('variant', allProblemsMain) // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)

    
    // Если связано с просмотром варианта
    if (getLocalStorage('fromStats') !== null){
        
        if (getLocalStorage('fromStats') === 0.5 && !getLocalStorage('demo')) {
            setLocalStorage('fromStats', 0) // Просмотр --> решение
            setLocalStorage('startTime', getTime('full'))
        }
        
        if (getLocalStorage('fromStats') === 1 || getLocalStorage('demo')) { // Только зашли на страницу
            setLocalStorage('againVariant', 'afk') // afk режим
            setLocalStorage('fromStats', 0.5) // Переход в просмотр

            timePlace.innerHTML = `<button class='time2'>Начать заново </button>` // имитация законченного варианта
            iconText.innerHTML = 'Результат' // имитация законченного варианта

            const myVariant = myVariantPrevious.problems // Задачи варианта
            const myColors = myVariantPrevious.colors // Цвета варианта
            setLocalStorage('variant', myVariant)


            const inputVariant = [...document.querySelectorAll('.input')] // input варианта
            const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры

            for (let index = 0; index < myVariant.length; index ++){
                background(myColors[index], index) // Ставим цвет контейнеру
                if (inputVariant[index]) inputVariant[index].readOnly = true // Только чтение

                const thisParent = allParents[index] // Родитель этой задачи
                const thisObject = searchObjectById(thisParent.id, getLocalStorage('variant'))
                const thisRadio = thisParent.querySelectorAll('.radio')
                const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
                const thisAnswer = thisParent.querySelector('.answer') // Звезда этой задачи
                thisStar.classList.remove('close') // Удаляем close звезде
                
                
                // white
                const thisAnswerSecondConteyner = thisParent.querySelector('.answerSecondConteyner') // white ниже
                const answerText = thisParent.querySelector('.wwww')
                const answerSecond = [...thisParent.querySelectorAll('.answerSecond')]
                const radioButtons = thisParent.querySelector('.radioButtons')
                thisAnswer.classList.add('white')

                if (thisAnswerSecondConteyner) {
                    thisAnswerSecondConteyner.classList.add('white') // white
                    answerText.classList.add('white') // white
                    answerSecond[0].classList.remove('black')
                    answerSecond[1].classList.remove('black')
                    radioButtons.classList.add('white')

                    const pokOtw = thisParent.querySelector('.pokOtw2')

                    const img = thisParent.querySelector('.rightPhoto')
                    const answerConteyner = thisParent.querySelector('.answer')

                    const height = +img.naturalHeight + 30

                    pokOtw.style.top = `${(height - 30) / 2 - 7}px`
                    answerConteyner.style.height = `${height}px`
                    radioButtons.style.top = `${height / 2 - 20}px`
                    answerText.style.bottom = `${(height - 30) / 2 - 7}px`
                }


                thisRadio.forEach(element => element.disabled = true)

                if (myColors[index] === 'red' && thisObject.number <= 11){
                    const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                    thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index]) // Записываем туда getRightAnswerHTML()
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')
                }
            }

            acceptBtn.disabled = true // Блокируем "завершить работу"
        }
    }


    // Вывод ответов
    const LocalStrAnswer = getLocalStorage('answers') // Все ответы
    
    if (LocalStrAnswer){
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach((element, index) => element.value = LocalStrAnswer[index])
    } else {
        const resultArray = []
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach(element => resultArray.push(element.value))
        setLocalStorage('answers', resultArray)
    }

    
    
    let isVariant = false
    const arrayNormalvariant = [['-', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
                                ['-', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
    arrayNormalvariant.forEach(element => {
        if (equalArrays(arrayCountProblem, element)) isVariant = true
    })


    
    const haveSecondPart = allProblemsMain.some(element => element.number >= 12)


    //if (getLocalStorage('againVariant') === 'afk' && getLocalStorage('fromStats') === 0) setLocalStorage('againVariant', 'deadLinePicked')
    


    

    if (isVariant) time(allProblemsMain, arrayCountProblem, isVariant, haveSecondPart)  // Если формат ЕГЭ, то работаем c time
    

    // nameVariant
    if (numberVariant === 0) nameVariant.innerHTML = 'Тестовая часть' // Если создан рандомно
    else if (getLocalStorage('fromStats') !== null) nameVariant.innerHTML = myVariantPrevious.name  // Если просмотр
    else nameVariant.innerHTML = specialVariants[numberVariant].name // Если спец вариант

    isVariant ? nameVariant.innerHTML += ' (вариант формата ЕГЭ)' : nameVariant.innerHTML += ' (вариант не формата ЕГЭ)' // Заголовок 
 

    if (haveSecondPart === false){
        // popUp
        const popUpMain = document.querySelector('.pop_up')
        const popUpSecond = document.querySelector('.pop_up1')
        const yesBtn = document.querySelector('.yesBtn')
        const cancelBtn = document.querySelector('.cancelBtn')

        acceptBtn.addEventListener('click', () =>  popUpSecond.classList.add('active')) // Нажатие на "закончить" // Открывает PopUp
        cancelBtn.addEventListener('click', () =>  popUpSecond.classList.remove('active')) // Нажатие на "отмена" в PopUp // Закрываем PopUp
    
        document.addEventListener('click', (event) => { // Выход из PopUp
            if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

            const popUpArrayClassList = ['pop_up', 'pop_up_container', 'pop_up_close']
            const popUp1ArrayClassList = ['pop_up1', 'pop_up_container1', 'pop_up_close1']
            const classThisElement = event.target.classList[0]

            if (popUpArrayClassList.includes(classThisElement)) popUpMain.classList.remove('active')
            if (popUp1ArrayClassList.includes(classThisElement)) popUpSecond.classList.remove('active')
        })




        yesBtn.addEventListener('click', () => endVariant(allProblemsMain, arrayCountProblem, isVariant, false)) // Нажатие на "Да" в PopUp
        

    
    
    } else if (haveSecondPart === true){
        const arraySecond = getSecondProblem(allProblemsMain)
        setLocalStorage('secondProblem', arraySecond)

        acceptBtn.addEventListener('click', () => window.location.pathname = `/MathWebDemo/HTML/secondPart.html`)

        if (getLocalStorage('secondPart') === 0.5){
            endVariant(allProblemsMain, arrayCountProblem, isVariant, true)
        }

        const popUpMain = document.querySelector('.pop_up')

        document.addEventListener('click', (event) => { // Выход из PopUp
            if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

            const popUpArrayClassList = ['pop_up', 'pop_up_container', 'pop_up_close']
            const classThisElement = event.target.classList[0]
            if (popUpArrayClassList.includes(classThisElement)) popUpMain.classList.remove('active')
        })
    }


    document.addEventListener('click', event => { // Обработка события - нажатие на "обновить страницу"
        if (event.target.classList[0] === 'time2') {
            removeLocalStorage('demo')
            location.reload() 
        }
    })

    document.addEventListener('input', (event) => { 
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') // Ограничение на input
        
        const answer = []
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach(element => answer.push(element.value))
        setLocalStorage('answers', answer) // Сохраняем ответы в LocalStr
    })       


    if (getLocalStorage('demo') === true) {
        setTimeout(() => {
            location.reload() 
         }, 100);

        setLocalStorage('demo', 1)
    }

}