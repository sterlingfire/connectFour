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
let board = new Array(WIDTH); // array of rows, each row is array of cells  (board[y][x])

// tells us the next row location of the game piece for each column
const nextMoveIndex = new Array(WIDTH).fill(0); 

/* Clears the game board and sets up the game. */
function gameStart() {
  makeBoard();
  makeHtmlBoard();
}


/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // set "board" to empty HEIGHT x WIDTH matrix array
  let column = new Array(HEIGHT);
  column.fill(null);
  board.fill(column);
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"

  // TODO: add comment for this code
  var top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  // TODO: add comment for this code
  for (var x = 0; x < WIDTH; x++) {
    var headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // dynamically creates the main part of html board
  // uses HEIGHT to create table rows
  // uses WIDTH to create table cells for each row
  for (var y = 0; y < HEIGHT; y++) {
    // TODO: Create a table row element and assign to a "row" variable

    for (var x = 0; x < WIDTH; x++) {
      // TODO: Create a table cell element and assign to a "cell" variable

      // TODO: add an id, y-x, to the above table cell element
      // you'll use this later, so make sure you use y-x

      // TODO: append the table cell to the table row

    }
    // TODO: append the row to the html board

  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // checks if column is not filled, return the next row index, else null
  return (nextMoveIndex[x] < HEIGHT) ? nextMoveIndex[x]++ : null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let col = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let row = findSpotForCol(col);
  if (row === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(row, col);

  placeGamePiece();

  updateBoard();





  // Checks whether there has been a win or a tie
  evaluateGame();

  // switch players
  currPlayer = (currPlayer === 1) ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  /** _win:
   * takes input array of 4 cell coordinates [ [y, x], [y, x], [y, x], [y, x] ]
   * returns true if all are legal coordinates for a cell & all cells match
   * currPlayer
   */
  function _win(cells) {

    //TODO: Check four cells to see if they're all legal & all color of current
    //player

  }

  // using HEIGHT and WIDTH, generate "check list" of coordinates
  // for 4 cells (starting here) for each of the different
  // ways to win: horizontal, vertical, diagonalDR, diagonalDL
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // TODO: assign values to the below variables for each of the ways to win
      // horizontal has been assigned for you
      // each should be an array of 4 cell coordinates:
      // [ [y, x], [y, x], [y, x], [y, x] ]

      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert;
      let diagDL;
      let diagDR;

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}


/* Called by evaluateGame() at the end of each players turn.
Checks to see if there are . */
function checkForTie() {
  //
}


/* Called by handleClick(). Calls checkForWin & checkForTie. */
function evaluateGame() {

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (checkForTie()) {
    return endGame('Both players have tied!');
  }
}


gameStart();




/* Called by column event listner. Calls placeGamePiece(), evaluateGame() */
function handleClick() {

}

/* Called by handleClick() Places game piece in the DOM. */
function placeGamePiece() {
  // Updates data structure based on user input
  // calls updateBoard
}

/* Called by placeGamePiece: Helper function to update DOM each turn */
function updateBoard() {

}



/* Called by evaluateGame() at the end of each players turn.
Checks to see if they have won the game. */
function checkForWin() {
  //
}


/* Called by checkForWin when the game has been won.
Displays win message. */
function displayWinMessage() {

}
/* Called by checkForWin when there are no more valid moves.
Displays tie message. */
function displayTieMessage() {

}