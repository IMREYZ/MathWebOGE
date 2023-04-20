function valid(array, cntProblem){

    if (array.length !== cntProblem) return false

    for (let i = 0; i < cntProblem; i++) { 
        if (isNaN(Number(array[i]))) return false
    }

    return true 
}

function f1(str){
    const array = str.split(' ')
    
    if (valid(array, 3)){
        let count = 0
        
        array.forEach(element => count += Number(element))

        return count

    } else return 'Введи правильно'
}

function f2(x){
    return x ** 2
}

function f3(x){
    return x ** 3
}

function f4(x){
    return x ** 4
}

function f5(x){
    return x ** 5
}

function f6(x){
    return x ** 6
}



function getAnswer(nameFunction, value) {
    return eval(nameFunction)(value)
}



