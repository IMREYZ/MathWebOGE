import { getLocalStorage } from "./LocalStorage.js"
import { timeForSolution, getTime } from "./Time.js"
import { endVariant } from "./EndVariant.js"




function addPopUp(thisTextPopUp, answer, rightAnswers, secondBall){ // Добавление PopUp на страницу
    const popUpBody = document.querySelector('.pop_up_body')
    const popUp = document.querySelector('.pop_up') 
    
    popUpBody.innerHTML += thisTextPopUp(answer, rightAnswers, secondBall) 
    popUp.classList.add('active')
}



function textPopUpFull(answer, rightAnswers, secondBallArray){ // HTML PopUp контент для "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант

    return  `<div class='testEnd'> Тест завершен! </div> 
            <hr/>
            <div class='statsForEge1'>Общая информация</div>
            <div>Всего заданий: <span class='w900'>${answer.length}</span> </div> 
            <div>Решено верно:  <span class="greenColor w900"> ${rightAnswers} </span> </div>
            <div>Решено неверно: <span class="redColor w900"> ${answer.length - rightAnswers} </span></div>
            <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / answer.length * 100)}% </span></div>
            <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>
            <div class='statsForEge'>Статистика по «ЕГЭ профиль (1-12)»</div>
            <div>Первичных баллов: <span class='w900'>${rightAnswers}</span> </div>
            <div>Вторичных баллов: <span class='w900'>${secondBallArray[rightAnswers]}</span> </div>`
}



function textPopUp(answer, rightAnswers){ // HTML PopUp контент для НЕ "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант
    const procentRight = procentRight(rightAnswers, answer.length)

    return `<div class='testEnd'> Тест завершен! </div> 
    <hr/>
    <div class='statsForEge1'>Общая информация</div>
    <div>Всего заданий: <span class='w900'>${answer.length}</span> </div> 
    <div>Решено верно: <span class='w900 greenColor'>${rightAnswers} </span></div>
    <div>Решено неверно: <span class='w900 redColor'>${answer.length - rightAnswers} </span></div>
    <div>Процент выполнения: <span class='w900'>${procentRight}% </span></div>
    <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>
    `
}




function popUpProcces(){
    const popUpMain = document.querySelector('.pop_up')
    const popUpSecond = document.querySelector('.pop_up1')
    const yesBtn = document.querySelector('.yesBtn')
    const cancelBtn = document.querySelector('.cancelBtn')
    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения

    acceptBtn.addEventListener('click', () => { popUpSecond.classList.add('active') }) // Нажатие на "закончить" // Открывает PopUp
    
    cancelBtn.addEventListener('click', () => { popUpSecond.classList.remove('active') }) // Нажатие на "отмена" в PopUp // Закрываем PopUp

    document.addEventListener('click', event => { // Выход из PopUp
        if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

        const popUpArrayClassList = ['pop_up', 'pop_up_container', 'pop_up_close']
        const popUp1ArrayClassList = ['pop_up1', 'pop_up_container1', 'pop_up_close1']
        const classThisElement = event.target.classList[0]

        if (popUpArrayClassList.includes(classThisElement)) popUpMain.classList.remove('active')
        if (popUp1ArrayClassList.includes(classThisElement)) popUpSecond.classList.remove('active')
    })

    yesBtn.addEventListener('click', () => { endVariant() }) // Нажатие на "Да" в PopUp
}



export { textPopUp, textPopUpFull, addPopUp, popUpProcces }
