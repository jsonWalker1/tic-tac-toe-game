console.log(1)

// Přidání event listenerů na tlačítka
document.getElementById('X').addEventListener('click', () => selectPlayer('X'));
document.getElementById('O').addEventListener('click', () => selectPlayer('O'));

// Funkce pro uložení dat hráče
function selectPlayer(symbol) {
    const playerData = {
        choice: symbol,  
        score: 0         
    };
    localStorage.setItem('playerData', JSON.stringify(playerData));
    window.location.href = 'board.html';
}


