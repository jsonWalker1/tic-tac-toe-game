import { createGrid } from "../MODULS/board.js"
import { makeComputerMove } from "../MODULS/CompMove.js";
createGrid();

const playerData = JSON.parse(localStorage.getItem('playerData'));
//console.log(playerData)


const cells = document.querySelectorAll('.cell'); // Selektuj všechna políčka
let currentPlayer = playerData.choice; // Hráč na tahu
//console.log(currentPlayer)

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.hasChildNodes()) { // Pokud políčko nemá obrázek
            const img = document.createElement('img'); // Vytvoř element obrázku
            img.src = currentPlayer === 'X' ? '../IMG/x.png' : '../IMG/o.png'; // Zvol obrázek
            img.alt = currentPlayer; // Pro popis (např. přístupnost)
            img.className = 'icon-board'
            cell.appendChild(img); // Přidej obrázek do políčka
            makeComputerMove();
        }
        
    });
});
