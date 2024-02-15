if (window.location.pathname === `/MathWebDemo/HTML/secondPart.html`){
    const conteynerProblem = document.querySelector('.conteynerAll')
    const secondProblem = getLocalStorage('secondProblem')
    const endBtn = document.querySelector('.leave1')
    const backBtn = document.querySelector('.backVar')
    const popUpSecond = document.querySelector('.pop_up1')
    const yesBtn = document.querySelector('.yesBtn')
    const cancelBtn = document.querySelector('.cancelBtn')
    
    if (getLocalStorage('againVariant') === 'afk'){
        window.location.pathname = `/MathWebDemo/index.html`
    }
    
    secondProblem.forEach((element, index) => {
        conteynerProblem.innerHTML += problemHTMLcheckSecond(element, index)
    });


    const allConteyners = document.querySelectorAll('.conteyner')
    allConteyners.forEach(element => {
        const img = element.querySelector('.rightPhoto')
        const answerConteyner = element.querySelector('.answer')
        const radioButtons = element.querySelector('.radioButtons')
        const answerText = element.querySelector('.wwww')

        const height = +img.naturalHeight + 30
        
        answerConteyner.style.height = `${height}px`
        radioButtons.style.top = `${height / 2 - 20}px`
        answerText.style.bottom = `${(height - 30) / 2 - 7}px`          
    })
    

    
    backBtn.addEventListener('click', () => window.location.pathname = `/MathWebDemo/HTML/variant.html`)


    if (getLocalStorage('variantEnd') === false) backBtn.disabled = true


    endBtn.addEventListener('click', () =>  popUpSecond.classList.add('active')) // Нажатие на "закончить" // Открывает PopUp
    cancelBtn.addEventListener('click', () =>  popUpSecond.classList.remove('active')) // Нажатие на "отмена" в PopUp // Закрываем PopUp
    

    document.addEventListener('click', (event) => { // Выход из PopUp
        if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

        const popUp1ArrayClassList = ['pop_up1', 'pop_up_container1', 'pop_up_close1']
        const classThisElement = event.target.classList[0]
        if (popUp1ArrayClassList.includes(classThisElement)) popUpSecond.classList.remove('active')
    })

    
    const resultPoints = []
    yesBtn.addEventListener('click', () => {
        setLocalStorage('secondPart', 1)
        setLocalStorage('againVariant', 'afk')
        removeLocalStorage('variantEnd')

        const allParents = document.querySelectorAll('.conteyner')
        allParents.forEach((element, index) => {
            const allRadioBtn = element.querySelectorAll('.radio')

            resultPoints.push(0)

            allRadioBtn.forEach(element => {
                if (element.checked) resultPoints[index] = +element.id
            })

        })

        setLocalStorage('resultPoints', resultPoints)

        window.location.pathname = `/MathWebDemo/HTML/variant.html`
    })


    
    if (!getLocalStorage('flag')){
        location.reload()
            
        setLocalStorage('flag', true)
    }
} 