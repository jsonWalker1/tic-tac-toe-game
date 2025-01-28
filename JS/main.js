import { createGrid } from "../MODULS/board.js"
import { makeComputerMove } from "../MODULS/CompMove.js";
createGrid();

const playerData = JSON.parse(localStorage.getItem('playerData'));
//console.log(playerData)


const cells = document.querySelectorAll('.cell'); 
let currentPlayer = playerData.choice; 
//console.log(currentPlayer)

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.hasChildNodes()) { 
            const img = document.createElement('img'); 
            img.src = currentPlayer === 'X' ? '../IMG/x.png' : '../IMG/o.png'; // Zvol obrázek
            img.alt = currentPlayer; 
            img.className = 'icon-board'
            cell.appendChild(img); 
            makeComputerMove();
        }
        
    });
});
