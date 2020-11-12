// Grid size: 7 columns & 6 rows
// This means max 7 possible moves per turn

// what HTML would be useful for the game board itself?
//{/* <table></table> */}
{/* how could you represent a played-piece in the HTML board? */ }
// Add a [blue||red] circle to the middle of the table cell
//border - radius: 50px; // adjust value?
{/* in the JavaScript, what would be a good structure for the in-memory game board? */ }
sample_data_structure =
  [["red", "blue", null, null, null, null,],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6]]
currentStackIndex = [1,0,0,4,0,0,0];
nextMoveIndex = [1,1,1,1,1,1,1];
{/* what might the flow of the game be? */ }
// Game starts blank

/* Clears the game board and sets up the game. */
function gameStart() {

}

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

/* Called by handleClick(). Calls checkForWin & checkForTie. */
function evaluateGame() {

}

/* Called by evaluateGame() at the end of each players turn.
Checks to see if they have won the game. */
function checkForWin() {
  //
}

/* Called by evaluateGame() at the end of each players turn.
Checks to see if there are . */
function checkForTie() {
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
// Player1's turn
  // Player clicks a column (or presses 1-7? stretch goal)
  // piece is placed
  // check for win
// Player2's turn
  // Player clicks a column (or presses 1-7? stretch goal)
  // piece is placed
  // check for win
// in the event of a win: Display Winner Message
// Tie (no valid moves left): Display Tie Message
// Clear board for new game
