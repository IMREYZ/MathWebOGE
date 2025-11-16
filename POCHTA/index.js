const inputContainer = document.querySelector('.inputContainer');
const showResultBtn = document.querySelector('.showResult');
const summResultContainer = document.querySelector('.down');
const changeCount = document.querySelector('.changeCount');
const inputCount = document.querySelector('.count');


function createLayout(count){    
    let resultForInputContainer = '';

    for (let i = 0; i < count; i ++){
        resultForInputContainer += '<div class="inputCurrContainer">'
        resultForInputContainer += `<input class='inputAddress'>`
        resultForInputContainer += `<input class='inputPension'>`

        let resultForInputPayments = '<span class="paymentContainer">';
        for (let j = 0; j < 4; j ++){
            resultForInputPayments += `<input class='inputPayment'>`
        }
        resultForInputPayments += '</span>'
        resultForInputContainer += resultForInputPayments
        resultForInputContainer += '<input class="resultGIRC" readonly="true">'
        resultForInputContainer += '<input class="resultAll" readonly="true">'
        resultForInputContainer += '</div>'
    }

    inputContainer.innerHTML = resultForInputContainer;
    summResultContainer.innerHTML = '';
}

createLayout(10);

changeCount.addEventListener('click', () => {    
    const changeCountNumber = +inputCount.value;

    createLayout(changeCountNumber);
})


showResultBtn.addEventListener('click', () => {
    const resultArray = [];
    const arrayOfString = [...document.querySelectorAll('.inputCurrContainer')];

    arrayOfString.forEach(string => {
        const inputAddress = string.querySelector('.inputAddress');
        const inputPension = string.querySelector('.inputPension');
        const inputPayment = [...string.querySelectorAll('.inputPayment')];

        const array = [inputAddress.value, +inputPension.value.replace(',', '.')];
        inputPayment.forEach(payment => array.push(+payment.value.replace(',', '.')));
        
        resultArray.push(array);
    })



    const allResultGIRC = [...document.querySelectorAll('.resultGIRC')];
    const allResultAll = [...document.querySelectorAll('.resultAll')];
    const arrayOfObjectPensions = createAllObjectsPension(resultArray);

    arrayOfObjectPensions.forEach((object, count) => {
        const thisResultGIRC = allResultGIRC[count];
        const thisResultAll = allResultAll[count];

        thisResultGIRC.value = object.summOfGIRC;
        thisResultAll.value = object.summOfAllPayments;
    })



    const [totalPension, totalGIRC, totalAllPayments, lenghtGIRC] = totalSums(arrayOfObjectPensions);
    summResultContainer.innerHTML = `Общая сумма пенсии: ${totalPension}, Общая сумма ГИРЦ: ${totalGIRC}, Общая сумма: ${totalAllPayments}, кол-во ГИРЦ: ${lenghtGIRC}`;
})





document.addEventListener('click', event => {
    if (event.target.classList[0] !== 'btnApart') return

    const numberApart = +event.target.dataset.apart;
    const thisObject = objectOfApartaments[numberApart];
    const countApartaments = thisObject.count;
    const arrayOfApartaments = thisObject.apart;

    createLayout(countApartaments);
    const inputAddress = [...document.querySelectorAll('.inputAddress')];

    inputAddress.forEach((address, count) => address.value = arrayOfApartaments[count]);
    inputCount.value = countApartaments;
})



document.addEventListener('input', event => { 
    if (event.target.classList[0] !== 'inputPension' && event.target.classList[0] !== 'inputPayment') return

    event.target.value = event.target.value.replace(/[^0123456789,.-]/g, '') // Ограничение на input

})