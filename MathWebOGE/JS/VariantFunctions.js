import { getLocalStorage } from "./LocalStorage.js"
import { allProblems, problems, specialVariants } from "./Base.js"


function pushArrayCountProblem() { // Массив количеств задач [-, 0, 1, 3, ....]
    const DOMarrayCountProblem = ['-', ...document.querySelectorAll('.countProblem')] // Все countProblem
    const arrayCountProblem = ['-'] // Результат

    DOMarrayCountProblem.forEach((countProblem, index) => { // Если index != 0 => push
        if (index !== 0) arrayCountProblem.push(+countProblem.value)
    })
    return arrayCountProblem
}



function countProblemToNumber(number) { // Присваение все input в index значение = value
    const allCountProblem = [...document.querySelectorAll('.countProblem')]
    allCountProblem.forEach(countProblem => countProblem.value = number)
}



function randomProblem(thisIndexProblem, thisCountProblem) { // thisCountProblem неповторяющих элементов из массива problems[thisIndexProblem]
    let result = []
    const myArray = problems[thisIndexProblem] // Масссив задач этого номера

    const {start, finish} = getLocalStorage('fromAndTo') // Min сложность



    function getRandomInt(numberIndex) { return Math.floor(Math.random() * Math.floor(numberIndex)) } // Рандомный индекс

    while (result.length !== thisCountProblem) { // Пока не хватает задач
        const randomIndex = getRandomInt(myArray.length) // Забираем индекс
        const randomElement = myArray[randomIndex] // Случайная задачи
        const procentThis = randomElement.procent // сложность этой задачи
        result.push(randomElement) // Добавляем задачу (задача остается, если: 1) result = set(result)   2) start <= procentThis <= finish)
        result = result.filter((element, index) => result.indexOf(element) === index && procentThis >= start && procentThis <= finish)
    }
    return result
}



function getObjectsFromAndTo(thisIndexProblem, start, finish) { // Возвращает задания по сложности
    let result = []
    const myArray = problems[thisIndexProblem]


    myArray.forEach(problem => {
        const thisProcent = problem.procent
        if (thisProcent >= start && thisProcent <= finish) result.push(problem)
    })

    return result
}



function getArrayObjectForSpecialVariants(numberVariant) { // ['1.21', '3.32'] -> [{problem: '1.21' ....}, {problem: '3.32'....}]
    const resultArray = []
    const thisIdArray = specialVariants[numberVariant].variant // Массив строк id задач

    allProblems.forEach(problem => { // Проходимся по всем задачам
        if (thisIdArray.includes(problem.problem)) resultArray.push(problem) // Если {n.m} in thisIdArray, добавляем задачу в thisIdArray
    })

    return resultArray

}



function randomVariant(countProblem) { // Генератор рандомного варинта
    let result = []
    for (let index = 1; index <= 12; index ++) {
        const randomProblemArray = randomProblem(index, countProblem[index]) // Массив задач номера i
        randomProblemArray.forEach(problem => result.push(problem)) // Добавляем все эти задачи в итоговый массив
    }

    return result
}



function getCountProblemForVariant(variant){ // Функиця, которая возвращает countProblem для варианта (нужно для special и для specialVariant )
    const countProblem = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    variant.forEach(problem => {                
        const numberProblem = +problem.problem.split('.')[0]
        countProblem[numberProblem] ++
    })
    
    return countProblem
}



function getAvgProcentVariant(variant){
    let sum = 0

    variant.forEach(problem => sum += problem.procent)    
    
    if (variant.length === 0) return 0
    else return parseInt(sum / variant.length)
}





export { pushArrayCountProblem, countProblemToNumber, randomProblem, getObjectsFromAndTo, getArrayObjectForSpecialVariants, randomVariant, getCountProblemForVariant, getAvgProcentVariant } 
