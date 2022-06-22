// Runtime: ms
// Time Complexity:
// Space Complexity:
// Memory: MB

//  Original | New | State
// 	  	0	   |  0  |   0
// 		  1	   |  0  |   1
// 		  0	   |  1  |   2
// 		  1	   |  1  |   3

const gameOfLife = board => {
  const ROWS = board.length,
    COLS = board[0].length;

  // helper function
  const countNeighbors = (r, c) => {
    nei = 0;
    for (let i = r - 1; i < r + 2; i++) {
      for (let j = c - 1; j < c + 2; j++) {
        if ((i == r && j == c) || i < 0 || j < 0 || i == ROWS || j == COLS) {
          continue;
        }
        if (board[i][j] == 1 || board[i][j] == 3) {
          nei += 1;
        }
      }
    }
    return nei;
  };

  for (let r = 0; r < ROWS.length; r++) {
    for (let c = 0; c < COLS.length; c++) {
      nei = countNeighbors(r, c);

      // if this position is originally a 1
      if (board[r][c] == 1) {
        // if count of neighbors is equal to 2 or 3
        if (nei == 2 || nei == 3) {
          board[r][c] = 3;
        }
      } else if (nei == 3) {
        board[r][c] = 2;
      }
    }
  }

  // iterate output state and map to new state
  for (let r = 0; r < ROWS.length; r++) {
    for (let c = 0; c < COLS.length; c++) {
      if (board[r][c] == 1) {
        board[r][c] = 0;
      } else if (nei == 3) {
        board[r][c] = 1;
      }
    }
  }
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
); // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(
  gameOfLife([
    [1, 1],
    [1, 0],
  ])
); // [[1,1],[1,1]]
