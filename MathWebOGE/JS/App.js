import { eventSendAnswer } from "./EventSendAnswer.js"
import { eventClickOnStar, eventSolution } from "./EventStarSolution.js"
import { renderSpecial, renderStatsNumber, clearStatsByDblClick, deleteOldStats, showRightAnswerHTML } from "./Render.js"
import { processIndex } from "./Index.js"
import { processCurrSubject } from "./CurrSubject.js"
import { processVariant } from "./Variant.js"
import { processSpecial } from "./Special.js"
import { processStress } from "./Stress.js"


eventSolution() // Открытие/закрытие решения
renderSpecial() // Отловка новых заданий
renderStatsNumber() // Рендер новых задач
eventClickOnStar() // Нажатие на звезду
showRightAnswerHTML() // Открытие/закрытие правильного ответа
deleteOldStats() // Удаление старой статистики
eventSendAnswer() // Отправка задания
clearStatsByDblClick() // Удаление статистики о задании


const currPage = window.location.pathname // Текущая страница

if (currPage === `/MathWeb/index.html` || currPage === `/MathWeb/`) processIndex()
if (currPage === `/MathWeb/HTML/currSubject.html` ) processCurrSubject()
if (currPage === `/MathWeb/HTML/variant.html`) processVariant()
if (currPage === '/MathWeb/HTML/stress.html') processStress()
if (currPage === '/MathWeb/HTML/special.html') processSpecial()


