if (location.pathname === '/Alias/game.html') {

    let curListWords = []
    let currWord
    let deadLineTime
    let gameStartBool = false
    let currentTeam
    const constEndGame = 10
    const deadLineArray = [0, 10]


    const firstTeam = {name: 'Первая тима', score: 0, countMatch: 0}
    const secondTeam = {name: 'Вторая команда', score: 0, countMatch: 0}

    const conteynerGame = document.querySelector('#cont')
    const conteynerTime = document.querySelector('#time')
    const conteynerName = document.querySelector('#name')

    conteynerGame.innerHTML = `<div> <input type="radio" name="name" id='1' class='radio' > <span id='name'>${firstTeam.name} </span> <span id='point'>(${firstTeam.score} очков) </span> </div>
                                <div> <input type="radio" name="name" id='2' class='radio'> <span id='name'>${secondTeam.name} </span> <span id='point'> (${secondTeam.score} очков) </span> </div>
                                <button id="startGame"> Начать </button>`
    
    rules.innerHTML = `Игра до <span class='w900'>${constEndGame}</span> очков, длина раунда: <span class='w900'>${addZero(deadLineArray[0])}:${addZero(deadLineArray[1])} мин. </span>`




    // Обработка события: нажатие на + или -
    document.addEventListener('click', event => {
        if (event.target.id !== 'plus' && event.target.id !== 'minus') return 

        const thisPoint = (event.target.id === 'plus') ? 1 : -1
        const thisWordObj = new Word(currWord, thisPoint)
        curListWords.push(thisWordObj)
        currWord = arrayRandomElement(WORDS) 
        
        const thisWord = document.querySelector('#thisWord')
        thisWord.innerHTML = currWord
    })

    



    // Обработка события: подтверждение результатов
    document.addEventListener('click', event => {
        if (event.target.id !== 'commit') return

        let rightAnswers = 0
        const radioChoose = [...document.querySelectorAll('.radioChoose')]
        radioChoose.forEach(element => {
            if (element.checked) rightAnswers += +element.id                
        })

        

                
        // Прибавление в объекты
        if (currentTeam === 'first') {
            firstTeam.score += rightAnswers
            firstTeam.countMatch ++
        }
        if (currentTeam === 'second'){
            secondTeam.score += rightAnswers
            secondTeam.countMatch ++
        }

        curListWords = []



        // Если кто-то выиграл
        if (firstTeam.countMatch === secondTeam.countMatch && (firstTeam.score >= constEndGame || secondTeam.score >= constEndGame)){
            let nameWinner 
            if (firstTeam.score > secondTeam.score) nameWinner = firstTeam.name
            else if (secondTeam.score > secondTeam.score) nameWinner = secondTeam.name
            else nameWinner = `Ничья - у обеих команд по ${constEndGame} очков.`

            conteynerGame.innerHTML = `<div> Победитель: ${nameWinner}</div>
                                       <button id="commit"> Начать заново </button>`

            firstTeam.score = 0
            secondTeam.score = 0
            firstTeam.countMatch = 0
            secondTeam.countMatch = 0
            currentTeam = null
 
        } else {
            // Если никто не выиграл
            conteynerGame.innerHTML = `<div> <input type="radio" name="name" id='1' class='radio' > <span id='name'>${firstTeam.name} </span> <span id='point'>(${firstTeam.score} очков) </span> <span class='zapas close'> (игра в запасе) </span> </div>
                                        <div> <input type="radio" name="name" id='2' class='radio'> <span id='name'>${secondTeam.name} </span> <span id='point'> (${secondTeam.score} очков) </span> <span class='zapas close'> (игра в запасе) </span> </div>
                                        <button id="startGame"> Начать </button>`
            conteynerGame.style.transform = 'translateY(200px)'

            conteynerName.innerHTML = 'Alias'

            rules.innerHTML = `Игра до <span class='w900'>${constEndGame}</span> очков, длина раунда: <span class='w900'>${addZero(deadLineArray[0])}:${addZero(deadLineArray[1])} мин. </span>`

        }




        // Блокировка кнопки
        const radio = [...document.querySelectorAll('.radio')]
        const zapas = [...document.querySelectorAll('.zapas')]
        
        
        if (radio.length !== 0){
            if (firstTeam.countMatch > secondTeam.countMatch) {
                radio[0].disabled = true
                zapas[1].classList.remove('close')
            }
            if (firstTeam.countMatch < secondTeam.countMatch){
                radio[1].disabled = true
                zapas[0].classList.remove('close')
            }
        }
    })


    document.addEventListener('click', event => {
        if (event.target.id !== 'startGame') return

        const radioBtnArray = [...document.querySelectorAll('.radio')]

        if (radioBtnArray[0].checked || radioBtnArray[1].checked){
            deadLineTime = deadLine(getTime(), deadLineArray[0], deadLineArray[1])
        
            currWord = arrayRandomElement(WORDS)
            conteynerGame.innerHTML = getHTMLgame(currWord)

            gameStartBool = true

            rules.innerHTML = ``
        }

        if (radioBtnArray[0].checked) currentTeam = 'first'
        if (radioBtnArray[1].checked) currentTeam = 'second' 
        
    })


    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'radioChoose') return

        const sumHTML = document.querySelector('.sum')

        let rightAnswers = 0
        const radioChoose = [...document.querySelectorAll('.radioChoose')]
        radioChoose.forEach(element => {
            if (element.checked) rightAnswers += +element.id
        })

        sumHTML.innerHTML = `Набрано очков: <span class='w900'>${rightAnswers} </span>`
    })


    
    setInterval(() => {        
        if (gameStartBool) {
            conteynerName.innerHTML = (currentTeam === 'first') ? firstTeam.name : secondTeam.name

            if (deadLineEnd(deadLineTime)) {
                const thisWordObj = new Word(currWord, 0)
                curListWords.push(thisWordObj)
                
                let countPoint = 0
                curListWords.forEach(element => countPoint += element.right)

                let conteynerGameResultText = `<div class='sum'> Набрано очков: <span class='w900'>${countPoint}</span></div>`
                curListWords.forEach((element, index) => {
                    conteynerGameResultText += `<div> <span class='word'>${element.word} </span> 
                                                <span class='WW'>✅ <input type="radio" name="${index}" id="1" class="radioChoose">
                                                ❌ <input type="radio" name="${index}" id="-1" class="radioChoose">
                                                🗑️ <input type="radio" name="${index}" id="0" class="radioChoose">
                                                </span> </div>`
                })
                conteynerGameResultText += `<button id="commit"> Подтвердить </button>`
                conteynerGame.innerHTML = conteynerGameResultText
                conteynerGame.style.transform = 'translateY(100px)'

                curListWords.forEach((element, index) => {
                    const resultThisWord = element.right
                    const thisRadio = [...document.querySelectorAll(`[name="${index}"]`)]
                    thisRadio.forEach(element => {
                        if (+element.id === resultThisWord) element.checked = true
                    })                    
                })


                const inputs = [...document.querySelectorAll('.inputs')]        
                inputs.forEach((element, index) => element.value = +curListWords[index].right)

                gameStartBool = false 
                conteynerTime.innerHTML = ''

            } else {
                conteynerTime.innerHTML = `Осталось <span class='w900'>${titleTime(getTime(), deadLineTime)} </span>`

                conteynerGame.style.transform = 'translateY(100px)'
                conteynerTime.style.transform = 'translateY(100px)'
            }
        }
    }, 1000)
}