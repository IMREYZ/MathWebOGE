if (window.location.pathname === `/Wordle/play.html`){
    
    const searchWord = randomWord()
    const wordLength = searchWord.length
    const countTry = 6
    const endText = document.querySelector('.endText')
    const retryBtn = document.querySelector('.retry') 


    createContent(wordLength, countTry)
    
    console.log(1)
    

    if (!getLocalStorage('gameStatus')) setLocalStorage('gameStatus', 'play')
    if (!getCurr()) setLocalStorage('currString', 1)

    if (getLocalStorage('colors')){
        for (let i = 0; i < getCurr() - 1; i ++){
            const currInputs = getCurrInputs(i + 1)

            currInputs.forEach((element, index) => {
                const thisColor = getLocalStorage('colors')[i][index]
                element.classList.add(thisColor)
                element.value = getLocalStorage('words')[i][index]
            })
        }
        getLocalStorage('gameStatus') !== 'wait' ? thisStringIsVisible(getCurr()) : thisStringIsVisible(-1)
    }

    if (getLocalStorage('curInput')){
        const currInputs = getCurrInputs(getCurr())
        currInputs.forEach((element, index) => element.value = getLocalStorage('curInput')[index])
    }

    if (getLocalStorage('gameStatus') === 'wait') endText.innerHTML = getLocalStorage('endText')


    
    
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] !== 'inputLetter') return 
        
        event.target.value = event.target.value.toUpperCase()

        const currInputs = getCurrInputs(getCurr())

        if (!getLocalStorage('curInput')) setLocalStorage('curInput', [])
        let letters = []
        currInputs.forEach(element => letters.push(element.value))
        setLocalStorage('curInput', letters)

        const idThisInput = event.target.id
        const thisColumn = +getNumberColumnThisInput(idThisInput)
        if (event.target.value.length === 1 && thisColumn !== wordLength) currInputs[thisColumn].focus()
    

        
        if (wordIsReady(currInputs)){
            const inputWord = gluingInputs(currInputs)         
            const arrayColors = infoAboutInputWord(inputWord, searchWord)
            currInputs.forEach((element, index) => element.classList.add(arrayColors[index]))


            if (!getLocalStorage('words')) setLocalStorage('words', [])
            if (!getLocalStorage('colors')) setLocalStorage('colors', [])

            removeLocalStorage('curInput')

            let thisWordsArray = getLocalStorage('words')
            thisWordsArray.push(inputWord)
            setLocalStorage('words', thisWordsArray)

            let thisColorsArray = getLocalStorage('colors')
            thisColorsArray.push(arrayColors)
            setLocalStorage('colors', thisColorsArray)
            

            if (finalOrNo(arrayColors) || getCurr() === countTry){
                setLocalStorage('gameStatus', 'wait')

                thisStringIsVisible(-1)
                if (finalOrNo(arrayColors)) endText.innerHTML = 'ИГРА ЗАВЕРШЕНА, ПОБЕДА!'
                if (getCurr() === countTry) endText.innerHTML = `Вы проиграли. Это было слово: ${searchWord}`
                
                setLocalStorage('endText', endText.innerHTML)
                setLocalStorage('currString', getCurr() + 1)

            } else{
                
                setLocalStorage('currString', getCurr() + 1)
                thisStringIsVisible(getCurr())

                const newFocusInput = document.querySelector(`[id='${getCurr()}.1']`)
                newFocusInput.focus()
            }           
        }
    })


    document.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
        
        const activeInput = document.activeElement.id
        const columnActiveInput = +getNumberColumnThisInput(activeInput)

        if (columnActiveInput !== 1 && event.key === 'ArrowLeft'){
            const newFocusInput = document.querySelector(`[id='${getCurr()}.${columnActiveInput - 1}']`)
            newFocusInput.focus()   
        }

        if (columnActiveInput !== wordLength && event.key === 'ArrowRight'){
            const newFocusInput = document.querySelector(`[id='${getCurr()}.${columnActiveInput + 1}']`)
            newFocusInput.focus()
            //newFocusInput.selectionStart = newFocusInput.value.length;
        }
    })

    retryBtn.addEventListener('click', () => {
        removeLocalStorage('gameStatus')
        removeLocalStorage('curInput')
        removeLocalStorage('words')
        removeLocalStorage('colors') 
        removeLocalStorage('currString') 
        removeLocalStorage('endText') 
    })
}