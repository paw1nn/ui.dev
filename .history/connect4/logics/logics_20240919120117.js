const rows = 6;
const cols = 7;
let currentPlayer = 'red'; // Start with player 1 (red)
let board = [];
let gameOver = false;

const gameBoard = document.getElementById('game-board');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');

function initializeBoard() {
  board = [];
  gameBoard.innerHTML = '';
  gameOver = false;

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push('');
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.addEventListener('click', handleCellClick);
      gameBoard.appendChild(cell);
    }
    board.push(row);
  }

  currentPlayer = 'red';
  statusText.textContent = "Player 1's turn (Red)";
}

function handleCellClick(event) {
  if (gameOver) return;
  
  const col = parseInt(event.target.dataset.col);
  let row = findAvailableRow(col);
  
  if (row !== -1) {
    board[row][col] = currentPlayer;
    const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    cell.classList.add(currentPlayer);
    
    if (checkWin(row, col)) {
      statusText.textContent = `Player ${currentPlayer === 'red' ? 1 : 2} wins!`;
      gameOver = true;
    } else if (isBoardFull()) {
      statusText.textContent = "It's a tie!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
      statusText.textContent = `Player ${currentPlayer === 'red' ? 1 : 2}'s turn (${currentPlayer === 'red' ? 'Red' : 'Yellow'})`;
    }
  }
}

function findAvailableRow(col) {
  for (let r = rows - 1; r >= 0; r--) {
    if (board[r][col] === '') {
      return r;
    }
  }
  return -1;
}

function checkWin(row, col) {
  return checkDirection(row, col, 1, 0) || // Horizontal
         checkDirection(row, col, 0, 1) || // Vertical
         checkDirection(row, col, 1, 1) || // Diagonal \
         checkDirection(row, col, 1, -1);  // Diagonal /
}

function checkDirection(row, col, rowDir, colDir) {
  let count = 0;
  
  for (let i = -3; i <= 3; i++) {
    const r = row + i * rowDir;
    const c = col + i * colDir;
    
    if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === currentPlayer) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }
  
  return false;
}

// Check if the board is full
function isBoardFull() {
  return board.every(row => row.every(cell => cell !== ''));
}

// Reset the game
resetButton.addEventListener('click', initializeBoard);

// Initialize the game on page load
initializeBoard();
