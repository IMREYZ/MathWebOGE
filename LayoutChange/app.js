const input = document.querySelector('.inputText')
const submit = document.querySelector('.submit')
const clear = document.querySelector('.clear')
const result = document.querySelector('.result')
const copy = document.querySelector('.copy')


// Очистка input и result
clear.addEventListener('click', () => {
    input.value = ''
    result.innerHTML = ''
})


// Нажатие submit
submit.addEventListener('click', () => {
    const inputText = input.value    
    const answer = LayoutFullText(inputText)

    result.innerHTML = answer
})


// Копирование
copy.addEventListener('click', () => {
    const resultText = result.innerHTML 
    navigator.clipboard.writeText(resultText)
})





