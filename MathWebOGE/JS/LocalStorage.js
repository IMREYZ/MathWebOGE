

function setLocalStorage(nameLocal, value){ // Запись в LocalStr
    localStorage.setItem(nameLocal, JSON.stringify(value))
}



function getLocalStorage(value){ // Получение из LocalStr
    return JSON.parse(localStorage.getItem(value))
}



function removeLocalStorage(value){ // Удаление из LocalStr
    localStorage.removeItem(value)
}


function cleanUpLocalStorage(){ // Убирание из LocalStr
    
    const importantWord = ['record', 'special', 'stats', 'statsNumber', 'timeOnVariant', 'countVariant', 'countSpecialVariant', 'countDefaultVariant'] // Список неубераемых
    let importantArray = []

    importantWord.forEach(word => importantArray.push({key: word, value: getLocalStorage(word)}))
    localStorage.clear()
    
    importantArray.forEach(important => {
        if (important.value) setLocalStorage(important.key, important.value) 
    })
}



function getThisProblems() { // Получаем текущий массив задач
    return getLocalStorage('thisProblems')
}


export {setLocalStorage, getLocalStorage, removeLocalStorage, cleanUpLocalStorage, getThisProblems}
