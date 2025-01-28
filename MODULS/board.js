export function createGrid (){
    let htmlBoard = '';
    for(let i = 0; i < 25; i++){
        htmlBoard +=`
        <div class="cell" class='JS-cell' data-id='${i}'></div>
        `
    } 
    let board = document.querySelector('.board');
    board.innerHTML = htmlBoard;    
}