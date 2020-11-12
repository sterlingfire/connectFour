describe("connect 4 tests" , function () {
  it("should correctly make the board", () => {
    makeBoard();

    expect(board.length).toEqual(HEIGHT);
    expect(board[0].length).toEqual(WIDTH);
    expect(board[0][0]).toBe(null);
  })

  it("should place game pieces in alternate order", () => {
    currPlayer = 1;
    board[3][1] = currPlayer; 
    currPlayer = 2;
    board[4][5] = currPlayer; 
    currPlayer = 1;
    board[1][5] = currPlayer; 

    expect(board[3][1]).toBe(1);
    expect(board[4][5]).toBe(2);
    expect(board[1][5]).toBe(1);
  }) 

  it("should find the correct spot to place the game piece", () => {
    makeBoard();
    board = [
      [1, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [1, 2, null, null, null, null, null],
      [2, 1, null, null, null, null, null],
      [1, 2, null, 2, null, null, null],
      [2, 1, null, 1, null, 1, null],
    ];

    expect(findSpotForCol(0)).toBe(null);
    expect(findSpotForCol(1)).toBe(1);
    expect(findSpotForCol(2)).toBe(5);
    expect(findSpotForCol(3)).toBe(3);
    expect(findSpotForCol(4)).toBe(5);
    expect(findSpotForCol(5)).toBe(4);
    expect(findSpotForCol(6)).toBe(5);
  }) 

  it("should say the player 1 has won (vertically)", () => {
    currPlayer = 1;
    board = [
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, 2, null, null, null, null, null],
      [1, 1, null, null, null, null, null],
      [1, 2, null, 2, null, null, null],
      [2, 1, null, 1, null, 1, null],
    ];

    expect(checkForWin()).toBe(true);
    expect(checkForTie()).toBe(false);
  })
  
  
  it("should say the player 2 has won (horizontally)", () => {
    currPlayer = 2;
    board = [
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [2, 2, 2, 2, null, null, null],
      [1, 1, 1, 2, null, null, null],
      [1, 2, 1, 2, null, null, null],
      [2, 1, 1, 1, null, 1, null],
    ];


    expect(checkForWin()).toBe(true);
    expect(checkForTie()).toBe(false);
  })

  it("should say the player 2 has won (diagonally DL)", () => {
    currPlayer = 2;
    board = [
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [2, 2, 1, 2, null, null, null],
      [1, 1, 2, 1, null, null, null],
      [1, 2, 1, 2, null, null, null],
      [2, 1, 1, 1, null, null, null],
    ];

    expect(checkForWin()).toBe(true);
    expect(checkForTie()).toBe(false);
  })
  
  
  it("should say the player 1 has won (diagonally DR)", () => {
    currPlayer = 1;
    board = [
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, 2, 2, 2, null, null, null],
      [1, 1, 1, 2, null, null, null],
      [1, 2, 1, 2, null, null, null],
      [2, 1, 1, 1, null, null, null],
    ];


    expect(checkForWin()).toBe(true);
    expect(checkForTie()).toBe(false);
  })


  it("should say both players have tied", () => {
    makeBoard();
    board = [
      [1, 1, 2, 2, 2, 1, 2],
      [1, 1, 2, 1, 2, 2, 2],
      [2, 2, 2, 1, 1, 2, 1],
      [1, 1, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 2, 1, 1],
      [2, 1, 1, 2, 1, 1, 2],
    ];

    expect(checkForWin()).toBe(false);
    expect(checkForTie()).toBe(true);
  })

  it("should correctly identify that the game has not ended", () => {
    makeBoard();
    board = [
      [1, 1, 2, 2, 2, null, 2],
      [1, 1, 2, 1, 2, 2, 2],
      [2, 2, 2, 1, 1, 2, 1],
      [1, 1, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 2, 1, 1],
      [2, 1, 1, 2, 1, 1, 2],
    ];

    expect(checkForWin()).toBe(false);
    expect(checkForTie()).toBe(false);
  })



});

