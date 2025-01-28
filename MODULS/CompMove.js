// Zjištění prázdných políček
export function makeComputerMove() {
    function getEmptyCells() {
        const cells = document.querySelectorAll('.cell');
        let emptyCells = [];
    
        cells.forEach((cell, index) => {
            if (!cell.querySelector('img')) { 
                emptyCells.push(index); 
            }
        });
        return emptyCells; 
    }

    // Funkce pro kontrolu výhry
    function checkForWin(player) {
        const cells = document.querySelectorAll('.cell');
        const winPatterns = [];

        
        for (let i = 0; i < 5; i++) {
            // Řady
            winPatterns.push([i * 5, i * 5 + 1, i * 5 + 2, i * 5 + 3, i * 5 + 4]);
            // Sloupce
            winPatterns.push([i, i + 5, i + 10, i + 15, i + 20]);
        }

        // Diagonály
        winPatterns.push([0, 6, 12, 18, 24]);
        winPatterns.push([4, 8, 12, 16, 20]);

        for (let pattern of winPatterns) {
            const [a, b, c, d, e] = pattern;
            if (cells[a].querySelector('img')?.alt === player &&
                cells[b].querySelector('img')?.alt === player &&
                cells[c].querySelector('img')?.alt === player &&
                cells[d].querySelector('img')?.alt === player &&
                !cells[e].querySelector('img')) {
                return e; 
            }
        }
        return null; 
    }

    const emptyCells = getEmptyCells();

    let computerMove = checkForWin('O'); 
    if (computerMove === null) {
        let blockMove = checkForWin('X');
        if (blockMove !== null) {
            computerMove = blockMove; 
        }
    }

    if (computerMove === null && emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        computerMove = emptyCells[randomIndex];
    }

    if (computerMove !== null) {
        const selectedCell = document.querySelectorAll('.cell')[computerMove]; 
        const img = document.createElement('img');
        img.className = 'icon-board'
        img.src = '../IMG/o.png'; 
        img.alt = 'O';
        selectedCell.appendChild(img); 
    }
}
