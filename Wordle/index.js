if (window.location.pathname === `/Wordle/index.html` || window.location.pathname === `/Wordle/`){
    const playGame = document.querySelector('.playGame')
    
    playGame.addEventListener('click', () => {
        removeLocalStorage('gameStatus')
        removeLocalStorage('curInput')
        removeLocalStorage('words')
        removeLocalStorage('colors') 
        removeLocalStorage('currString')
        removeLocalStorage('endText')  
    })
}