// Game variables
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  let currentPlayer = 'X';
  let gameOver = false;
  let singlePlayerMode = false;
  
  // Function to make a move
  function makeMove(row, col) {
    if (board[row][col] === '' && !gameOver) {
      board[row][col] = currentPlayer;
      document.getElementById('status').textContent = `Jogador atual: ${currentPlayer}`;
      document.getElementById('board').children[row * 3 + col].textContent = currentPlayer;
  
      if (checkWin(currentPlayer)) {
        gameOver = true;
        document.getElementById('status').textContent = `O jogador ${currentPlayer} ganhou!`;
      } else if (checkDraw()) {
        gameOver = true;
        document.getElementById('status').textContent = 'Empate!';
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  
        if (singlePlayerMode && currentPlayer === 'O') {
          setTimeout(computerMove, 500);
        }
      }
    }
  }
  
  // Function for computer move (AI)
  function computerMove() {
    let bestScore = -Infinity;
    let bestMove = {};
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = currentPlayer;
          let score = minimax(board, 0, false);
          board[i][j] = '';
  
          if (score > bestScore) {
            bestScore = score;
            bestMove.row = i;
            bestMove.col = j;
          }
        }
      }
    }
  
    makeMove(bestMove.row, bestMove.col);
  }
  
  // Minimax algorithm for computer move
  function minimax(board, depth, isMaximizing) {
    if (checkWin('X')) {
      return -1;
    } else if (checkWin('O')) {
      return 1;
    } else if (checkDraw()) {
      return 0;
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            board[i][j] = 'O';
            let score = minimax(board, depth + 1, false);
            board[i][j] = '';
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            board[i][j] = 'X';
            let score = minimax(board, depth + 1, true);
            board[i][j] = '';
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }
  
  // Function to check for a win
  function checkWin(player) {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player && board[i][1] === player && board[i][2] === player ||
        board[0][i] === player && board[1][i] === player && board[2][i] === player
      ) {
        return true;
      }
    }
  
    if (
      board[0][0] === player && board[1][1] === player && board[2][2] === player ||
      board[0][2] === player && board[1][1] === player && board[2][0] === player
    ) {
      return true;
    }
  
    return false;
  }
  
  // Function to check for a draw
  function checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }
  
  // Function to reset the board
  function resetBoard() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').textContent = `Jogador atual: ${currentPlayer}`;
  
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
    }
  }
  
  // Initialize the game
  resetBoard();
  