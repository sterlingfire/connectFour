"use strict";

/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board; // array of rows, each row is array of cells  (board[y][x])
let gameIsOver=false;
/* Clears the game board and sets up the game. */
// feedback: function name verb + noun
function gameStart() {
  makeBoard();
  makeHtmlBoard();
}

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */
function makeBoard() {
  board = [];

  // set "board" to empty HEIGHT x WIDTH matrix array
  for (let i = 0; i < HEIGHT; i++) {
    let column = new Array(WIDTH);
    column.fill(null);
    board.push(column);
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  let htmlBoard = document.getElementById("board");

  // Adds and event listener for the top of each column
  let top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);



  // Sets each headCell id equal to column index
  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // dynamically creates the main part of html board
  // uses HEIGHT to create table rows
  // uses WIDTH to create table cells for each row
  for (let y = 0; y < HEIGHT; y++) {
    let row = document.createElement("tr");

    // add cells to rows & rows to board
    for (let x = 0; x < WIDTH; x++) {
      let cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;
  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null || gameIsOver) {
    return;
  }

  // Updates data structure based on user input
  board[y][x] = currPlayer;

  // place piece in board and add to HTML table
  placeInTable(y, x);

  // Checks whether there has been a win or a tie
  evaluateGame();

  // switch players
  currPlayer = (currPlayer === 1) ? 2 : 1;
}

/* Called by handleClick() Places game piece in the DOM. */
function placeGamePiece(y, x) {

}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  let gamePiece = document.createElement('div');
  let pieceColor = (currPlayer === 1) ? "red" : "blue";
  gamePiece.classList.add("piece", pieceColor);

  let cell = document.getElementById(`${y}-${x}`);
  cell.append(gamePiece);
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
function findSpotForCol(x) {
  // checks if column is not filled, return the next row index, else null
  for (let y = HEIGHT - 1; y > -1; y--) {
    if (board[y][x] === null) {
      return y;
    }
  }
  return null;
}

/* Called by handleClick(). Calls checkForWin & checkForTie. */
function evaluateGame() {

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  if (checkForTie()) {
    return endGame('Both players have tied!');
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  /** _win:
   * takes input array of 4 cell coordinates [ [y, x], [y, x], [y, x], [y, x] ]
   * returns true if all are legal coordinates for a cell & all cells match
   * currPlayer
   */
  function _win(cells) {
    for (let [y, x] of cells) {
      // check if the indexes are out of bounds, if so fail early.
      if (y < 0 || x < 0 || y >= HEIGHT || x >= WIDTH) {
        return false
      }

      // fail early if that location is empty, or has the other players piece.
      if (board[y][x] === null || board[y][x] !== currPlayer) {
        return false;
      }
    }
    return true;
  }
  // using HEIGHT and WIDTH, generate "check list" of coordinates
  // for 4 cells (starting here) for each of the different
  // ways to win: horizontal, vertical, diagonalDR, diagonalDL
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // each should be an array of 4 cell coordinates:
      // [ [y, x], [y, x], [y, x], [y, x] ]

      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
  return false;
}

/* Called by evaluateGame() at the end of each players turn.
Checks to see if there are . */
function checkForTie() {
  for (let row of board) {
    if (row.some(cell => cell === null)) return false;
  }
  return true;
}

/** endGame: announce game end */
function endGame(msg) {
  // Set header to game msg
  // feedback: querySelector
  document.getElementsByTagName("h1")[0].innerText = `${msg}`;
  gameIsOver = true;
  setTimeout(function () { alert(msg); }, 1000);
}


gameStart();
