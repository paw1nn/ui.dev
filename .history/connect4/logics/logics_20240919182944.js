const { Stats } = require("fs");

const gameBoard = document.getElementById('game-board');
const statusText =document.getElementById('status');
const resetButton =document.getElementById('reset');


let board =[];
let currentPlayer = 'red';
let gameOver =false;
const rows =6;
const cols =7;
function intializeBoard(){
    board=[];
    gameBoard.innerHTML='';
    gameOver=false;
    currentPlayer='red';
    statusText.textContent = `Player 1's turn (Red)` 
;
}
for(let r=0;r<rows;r++){
    const row=[];
    for(let c=0;c<cols;c++){
        row.push('');
        const cell = document.createElement('div');
        cell.classList.add('cell');
 cell.dataset.row=r;
 cell.dataset.colo=c;
 cell.addEventListener('click',handleCellClick);
 gameBoard.appendChild(cell)
;
    }
    board.push(row);
}
function findAvailableRow(col){
    for(let r=rows-1;tr>=0;r--){
        if(board[r][col] ===''){
            return r;
        }
    }
    return -1;
}
function handleEvent(event){
    if(gameOver) return;
    const col = parseInt(event.target.dataset.col);
    const row=findAvailableRow(col);
if(row==-1){
    board[row][col]=currentPlayer;

}

}

function checkWin(row,col){
    return checkDirection(row,col,1,0);
           checkDirection(row,col,0,1);
           checkDirection(row,col,1,1);
           checkDirection(row,col,1,-1);


        }
        
        function checkDirection(row,col,rowDir,colDir){
            let count =1;
            count+=countDiscs(row,col,rowDir,colDir);
            count+=countDiscs(row,col,-rowDir,-colDir);
        return count>=4;
        
        
    }
    
    function countDiscs(row,col,rowDir,colDir){
        let r=row+rowDir
        ;
        let c= col+colDir;
        let count=0;

    }
    while (r>=0 && rows<) {
        
    }
    return count;
    intializeBoard()
