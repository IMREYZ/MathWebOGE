const WORDS = ['Нори', 'Молоко', 'Физика', 'Полина', 'Витя', 'Ноутбук', 'Кепка', 'Часы', 'Нож']

function arrayRandomElement(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function getHTMLgame(word){
    return `<button id="plus"> + </button>
            <span id="thisWord"> ${word} </span>
            <button id="minus"> - </button>`
}

function getTime(){ // Возвращение времени
    const date = new Date()

    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}

function deadLine(time, minute, second){ // Функция для времени №2    '23:40:20 12 Февраля 2023' --> '00:10:20'
    const hoursMinuteSecondArray = timeToArray(time)
    const hoursDeadLine = addZero((hoursMinuteSecondArray[0] + +(hoursMinuteSecondArray[1] >= (60 - minute))) % 24)
    const minuteDeadLine = addZero((hoursMinuteSecondArray[1] + minute + +(hoursMinuteSecondArray[2] >= (60 - second))) % 60)
    const secondDeadLine = addZero((hoursMinuteSecondArray[2] + second) % 60)
    return `${hoursDeadLine}:${minuteDeadLine}:${secondDeadLine}`
}

function addZero(node){ return +node < 10 ? '0' + node : node }

function timeToArray(time){ // Функция для времени №1    '4:30:20 12 Февраля 2023' --> [4, 30, 20]
    time += ' '
    
    let timeNew = ''
    let index = 0
    let flag = true

    while (flag) {
        timeNew += time[index]
        index += 1

        if (time[index] === ' ') flag = false
    }

    timeNew = timeNew.split(':')
    let timeArray = []
    timeNew.forEach((element, index) => {if (index < 3) timeArray.push(+element)})
    return timeArray
}

function deadLineEnd(deadLineTime){ // Прошел ли дедлайн?   Если прошел, то true   Если еще нет, то false
    let thisTime = getTime('full') // Текущее время
    let deadLine = deadLineTime // DeadLine

    thisTime = +thisTime.replaceAll(':', '')
    deadLine = +deadLine.replaceAll(':', '')
    if (deadLine < 36000 && thisTime > 200000) deadLine += 240000 // Случай с 23 и 00
    return deadLine - thisTime <= 0 // Если разность <= 0 или >= 110_000 --> время вышло
}

function titleTime(thisTime, deadLine){ // Обратный отсчет времени     ('23:58:04', '00:03:50') --> '00:05:46'
    thisTime = thisTime.split(':') // Текущее время
    deadLine = deadLine.split(':') // DeadLine

    if (+thisTime[0] > +deadLine[0]) deadLine[0] = String(+deadLine[0] + 24) // Для случая с 23 и 00
    
    const secondLeft = (+deadLine[0] - +thisTime[0]) * 3600 + (+deadLine[1] - +thisTime[1]) * 60 + (+deadLine[2] - +thisTime[2]) * 1 // Кол-во секунд
    console.log(secondLeft)
    
    const result = `${addZero(parseInt(secondLeft / 60))}:${addZero(secondLeft % 60)}` // Результат
    return result 
}


class Word{
    constructor(word, right){
        this.word = word
        this.right = right
    }
}
