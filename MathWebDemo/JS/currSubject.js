// Если на странице currSubject
if (window.location.pathname === `/MathWebDemo/HTML/currSubject.html`){

    // Считываем номер задания и имя задания
    const id = getLocalStorage('idProblem') // Номер задания
    const name = getLocalStorage('nameProblem') // Имя задания
    const title = document.querySelector('.title') // Заголовок
    const allConteynerProblem = document.querySelector('.allConteynerPr') // Имя задачи
    const nameProblem = document.querySelector('.name') // Контейнер html разметки
    const allProblems = problems[id] // Все задачи

    nameProblem.innerHTML = name
    title.innerHTML = name
    
    if (!getLocalStorage('thisProblems')) setLocalStorage('thisProblems', allProblems) // Если в LocalStr нет текущих задач - добавляем все задачи
    if (!getLocalStorage('select')) setLocalStorage('select', 'oldToNew') // Если в LocalStr нет select - oldToNew



    // Добавляем Checkbox на страницу
    const filterConteyner = document.querySelector('.fil') // Контейнер
    const themeThisProblem = themeProblems[id] // Темы задачи
    let thisTypes = [] // Массив всех тем
    for (let index = 0; index < themeThisProblem.length; index ++) thisTypes.push(themeThisProblem[index].name)

    let text = ``
    themeThisProblem.forEach(element => {
        const nameNormalClass = getNormalClass(element.name)
        text += `<div class='SSS'> 
                    <input class='checkbox' type='checkbox' id='${nameNormalClass}'> 
                    <span class='${nameNormalClass}'>${element.name} (${element.count} шт.)</span> 
                 </div>`
    })

    filterConteyner.innerHTML += text

    const allCheckbox = document.querySelectorAll('.checkbox') // Все checkbox в HTML
    const minusBox = document.querySelector('.minusBox') // Убрать всё
    const plusBox = document.querySelector('.plusBox') // Добавить всё



    if (getLocalStorage('checkbox')){ // Если в LocalStr был checkbox  (в случае обновления страницы)
        const arrayCheckbox = getLocalStorage('checkbox') // Массив checkbox

        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML        
            if (arrayCheckbox.includes(element.id)) { // Если id in arrayCheckbox, то
                element.checked = true // Делаем checked = true
                addW900(`.${element.id}`, true) // Добавляем w900
            }
        })
        
    } else { // Если не было в LocalStr
        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            element.checked = true // checked
            addW900(`.${element.id}`, true) // w900
        })
    }

    // Первый вывод заданий 
    getThisProblems().forEach(element => allConteynerProblem.innerHTML += (element.number <= 11 ? problemHTMLcurr(element) : problemHTMLcurrSecond(element)))


    // Возвращаем цвета; инпуты; инфу об "показать ответ"
    currColor(getThisProblems())
    currInput(getThisProblems())
    currInfoShowRightAnswer(getThisProblems())

    
    
    document.addEventListener('click', (event) => { // Обработка события нажатия на checkbox
        if (event.target.classList[0] !== 'checkbox') return // Если не checkbox - выходим

        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', []) // Если checkbox нет в LocalStr - пустой массив

        const checkboxArray = [] // Массив значений checkbox

        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            if (element.checked) { // Если checked
                checkboxArray.push(element.id) // Добавляем в массив id
                addW900(`.${element.id}`, true) // Добавляем w900

            } else addW900(`.${element.id}`, false) // Иначе убираем w900
        })
        
        setLocalStorage('checkbox', checkboxArray) // Устанавлием checkbox в LocalStr

        const newThisProblems = [] // Массив новых задач

        for (let index = 0; index < allProblems.length; index ++){ // Проходимся по базовому массиву всех задач
            const normalTypeThisProblem = getNormalClass(allProblems[index].type)

            if (checkboxArray.includes(normalTypeThisProblem)) { // Если type задачи in checkboxArray: добавляем задачу в новый массив
                newThisProblems.push(allProblems[index]) 
            }
        }
        
        setLocalStorage('thisProblems', newThisProblems) // Обновляем текущие задачи
        sortProblem(getLocalStorage('select')) // сортируем эти задачи
    
        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += (element.number <= 11 ? problemHTMLcurr(element) : problemHTMLcurrSecond(element))) // Выводим задания

        currColor(getThisProblems()) // Выводим цвета
        currInput(getThisProblems()) // Выводим input
        currInfoShowRightAnswer(getThisProblems()) // Выводим "показать ответ"

        if (id >= 12) location.reload()
    })


    const thisSelect = getLocalStorage('select') // Забираем из LocalStr select
    const optionCurr = document.querySelector('.optionCurr') // Текущий select

    if (thisSelect) { // Если есть select
        sortProblem(thisSelect) // Сортировка к изначальному виду
        optionCurr.querySelector(`[value=${thisSelect}]`).selected="selected" // Возвращаем к тому, что было до обновления
    }


    optionCurr.addEventListener('change', () => {  // Обработка события "Сортировка"
        const thisOption = optionCurr.value // Текущий пик
        
        sortProblem(thisOption) // Сортируем по новому изменению

        setLocalStorage('select', thisOption) // Добавляем в LocalStr select

        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += (element.number <= 11 ? problemHTMLcurr(element) : problemHTMLcurrSecond(element))) // Образовываем обновленную страницу

        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())

        if (id >= 12) location.reload()
    })

    
    eventSendAnswer() // Нажатие на "Ответить"


    minusBox.addEventListener('click', () => { // Обработка события - нажатие на "удалить всё"
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', []) // Если checkbox нет в LocalStr - пустой массив

        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            element.checked = false
            addW900(`.${element.id}`, false)
        })

        setLocalStorage('thisProblems', []) // Текущие задачи = []
    
        allConteynerProblem.innerHTML = '' // Выводим задания

        setLocalStorage('checkbox', []) // checkbox = []

        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())

        if (id >= 12) location.reload()
    })


    plusBox.addEventListener('click', () => { // Обработка события - нажатие на "добавить всё"
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', []) // Если checkbox нет в LocalStr - пустой массив

        const fullBox = []
        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            element.checked = true
            addW900(`.${element.id}`, true)
            fullBox.push(element.id)
        })

        setLocalStorage('checkbox', fullBox) // checkbox = все checkbox

        setLocalStorage('thisProblems', allProblems) // Все задачи
        sortProblem(getLocalStorage('select')) // Сортируем
    
        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += (element.number <= 11 ? problemHTMLcurr(element) : problemHTMLcurrSecond(element))) // Выводим задания

        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())

        if (id >= 12) location.reload()
    })


    createAndSaveColors(getThisProblems()) // Сохранение
    createAndSaveInfoAnswers(getThisProblems()) // Сохранение
    createAndSaveInputs(getThisProblems()) // Сохранение


    document.addEventListener('input', (event) => { // Ограничение на input
        if (event.target.classList[0] !== 'input') return // Если событие - не кнопка input, то выходим

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') // Регулярное выражение для фильтрации input
    })
}