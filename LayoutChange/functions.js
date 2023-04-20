const letters = [
    ['?', ','], ['q', 'й'], ['w', 'ц'], ['e', 'у'], ['r', 'к'], ['t', 'е'], 
    ['y', 'н'], ['u', 'г'], ['i', 'ш'], ['o', 'щ'], ['p', 'з'],
    ['[', 'х'], [']', 'ъ'], ['a', 'ф'], ['s', 'ы'], ['d', 'в'],
    ['f', 'а'], ['g', 'п'], ['h', 'р'], ['j', 'о'], ['k', 'л'],
    ['l', 'д'], [';', 'ж'], ["'", 'э'], ['z', 'я'], ['x', 'ч'],
    ['c', 'с'], ['v', 'м'], ['b', 'и'], ['n', 'т'], ['m', 'ь'], 
    [',', 'б'], ['.', 'ю']] 

function foundReverseLetter(letter){
    for (let i = 0; i < letters.length; i ++){
        for (let j = 0; j < letters[i].length; j ++){

            const thisLetter = letters[i][j]

            if (thisLetter === letter.toLowerCase()){
                if (letter === letter.toLowerCase()) return letters[i][1 - j]
                else return letters[i][1 - j].toUpperCase()
            }
        } 
    }

    return letter
}

function LayoutFullText(string){
    let resultString = ''

    for (let i = 0; i < string.length; i ++){
        const letter = string[i]
        resultString += foundReverseLetter(letter)
    }

    return resultString
}

