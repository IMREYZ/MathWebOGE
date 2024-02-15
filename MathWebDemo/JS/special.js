if (window.location.pathname === `/MathWebDemo/HTML/special.html`){

    const conteynerAll = document.querySelector('.conteynerAll')  
    const arraySpecialObject = getSpecialObject()

    arraySpecialObject.forEach(element => conteynerAll.innerHTML += (element.number <= 11 ? problemHTMLcurr(element) : problemHTMLcurrSecond(element)))

    eventSendAnswer() // Отправляем ответ

    // Создание и/или сохранение 1) цветов 2) "показать ответ"  3) input
    createAndSaveColors(getSpecialObject()) 
    createAndSaveInfoAnswers(getSpecialObject())
    createAndSaveInputs(getSpecialObject())

    // Возвращаем цвета и инпуты в случае инпута
    currColor(getSpecialObject())
    currInput(getSpecialObject())
    currInfoShowRightAnswer(getSpecialObject())

    document.addEventListener('input', (event) => {
        if (event.target.classList[0] != 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
    })    
      
}