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
for()