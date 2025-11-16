import { getTime } from "./Time.js"



function getFullDaysBeforeExam(day){ // осталось/остался дней/дня/день
    let first; let second
    
    if ((day >= 5 && day <= 20) || (day % 10 >= 5) || (day % 10 === 0)) {
        first = 'осталось'
        second = 'дней'
    } else if (day % 10 === 1){
        first = 'остался'
        second = 'день'
    } else {
        first = 'осталось'
        second = 'дня'
    }

    const days = daysBeforeExam()
    return `до ЕГЭ ${first} <span class='dayLeft'>${days}</span> ${second}`
}



function daysBeforeExam(){ // Дней до экзамена
    const EXAM = {year: 2025, month: 6 - 1, day: 31} // Костанта - день экзамена
    const thisDay = {year: getTime('y'), month: getTime('mo') + 1, day: getTime('d')} // Формируем текущий день
    const pogresh = 1

    const dayLeft = (EXAM.year - thisDay.year) * 365 + (EXAM.month - thisDay.month) * 30 + (EXAM.day - thisDay.day) + pogresh // Сколько дней осталось
    return dayLeft
}



export { getFullDaysBeforeExam, daysBeforeExam }
