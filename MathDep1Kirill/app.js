const bodyConteyner = document.querySelector('.body')

const COUNT_NUMBER = 6

const HELP_INPUT = [ '-',
    'Введите e1, e2, e3',
    'Введите e1, e2, e3, e4',
    'Введите A, e, h, e~, h~',
    'Введите A, e, h, e~, h~',
    'Введите A, e~, x, e',
    'Введите e~, e'
]

for (let i = 1; i <= COUNT_NUMBER; i ++){
    const text = 
    `<div class='conteyner'> 
        <span class='number'> Задание ${i} </span>
        <input class='input' placeholder='${HELP_INPUT[i]}'/>
        <button class='button' id='${i}'> ${i} </button>
        <span class='output'> </span>
    </div>`

    bodyConteyner.innerHTML += text
}

document.addEventListener('click', (event) => {
    if (event.target.classList[0] !== 'button') return 

    const idThisBtn = event.target.id
    const thisParent = event.target.closest('.conteyner')
    const thisInput = thisParent.querySelector('.input')
    const thisOutput = thisParent.querySelector('.output')
    
    const thisInputValue = thisInput.value
    const result = getAnswer(`f${idThisBtn}`, thisInputValue)
    thisOutput.innerHTML = result


})



