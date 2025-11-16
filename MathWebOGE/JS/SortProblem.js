import { getLocalStorage, setLocalStorage, getThisProblems } from "./LocalStorage.js"


function sortProblem(thisSelect){ // Сортировка массива 'thisProblems'
    let sortedArray

    if (thisSelect === 'oldToNew') sortedArray = getThisProblems().sort((a, b) => a.id - b.id)
    else if (thisSelect === 'newToOld') sortedArray = getThisProblems().sort((a, b) => b.id - a.id)
    else if (thisSelect === 'easyToHard')  sortedArray = getThisProblems().sort((a, b) => a.procent - b.procent)
    else if (thisSelect === 'hardToEasy') sortedArray = getThisProblems().sort((a, b) => b.procent - a.procent)
    
    else if (thisSelect === 'userEasyToHard' || thisSelect === 'userHardToEasy') {

        const statsNumberLocalStr = getLocalStorage('statsNumber')
        const thisProblems = getThisProblems()
        thisProblems.forEach(problem => problem.stats = statsNumberLocalStr[problem.id]) // Добавляем доп. характ.

        if (thisSelect === 'userEasyToHard') {
            sortedArray = thisProblems.sort((a, b) => b.stats.all - a.stats.all)
            sortedArray = sortedArray.sort((a, b) => b.stats.procent - a.stats.procent)
        }
        if (thisSelect === 'userHardToEasy') {
            sortedArray = thisProblems.sort((a, b) => b.stats.all - a.stats.all)
            sortedArray = sortedArray.sort((a, b) => a.stats.procent - b.stats.procent)
        }
    }

    setLocalStorage('thisProblems', sortedArray)
}

export {sortProblem} 
