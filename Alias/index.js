if (location.pathname === '/Alias/index.html') {
    const btn = document.querySelector('#start')
    const conteynerGame = document.querySelector('#cont')


    btn.addEventListener('click', () => {
        location.pathname = '/Alias/game.html'
    })

}
