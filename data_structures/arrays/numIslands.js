/*
EXPLANATION
    This is a JavaScript function called numIslands that takes a two-dimensional grid of '0's and '1's as its input and returns the number
of connected islands in the grid.

    The function works by using a Depth-First Search (DFS) algorithm to traverse the grid and identify connected regions of '1's. The
function first initializes some variables: m and n represent the dimensions of the grid, count counts the number of islands, and dfs is a
helper function that performs the DFS.

    The dfs function takes two arguments, i and j, which represent the current row and column indices. The function first checks if the
current index is out of bounds or if the current cell is '0'. If either of these conditions is true, the function simply returns without
doing anything. Otherwise, the function marks the current cell as '0' (to indicate that it has been visited), and then recursively calls
dfs on all four adjacent cells (i.e., up, down, left, and right).

    The main loop of the numIslands function then iterates through all cells in the grid, and for each cell that contains a '1', it
increments the count variable and calls the dfs function to traverse the connected region.

    Once all connected regions have been traversed, the function returns the final value of count, which represents the number of islands
in the grid.

    Overall, the numIslands function is an efficient and straightforward way to identify and count connected regions in a two-dimensional
grid.
*/

/*
TIME AND SPACE COMPLEXITY
    Time = O(mn), Space = O(1 + mn)
    The outer loop iterates over each row, and the inner loop iterates over each column of the grid, so the time complexity of the nested
loops is O(mn), where m is the number of rows and n is the number of columns in the grid. For each cell, the DFS algorithm visits its
adjacent cells, which takes constant time. Therefore, the time complexity of the DFS algorithm is O(1). Since the DFS algorithm is called
once for each cell that contains a 1, the total time complexity of the function is O(mn).

    The function uses a constant amount of space for the m, n, and count variables. The DFS algorithm uses recursion, which consumes
additional memory on the call stack. However, the maximum depth of the call stack is bounded by the number of cells in the grid. 
Therefore, the space complexity of the DFS algorithm is O(mn). Overall, the space complexity of the function is O(1 + mn).
*/


// This function takes in a 2D array of '1's and '0's representing a map
// of land and water, and returns the number of distinct islands of land.
const numIslands = grid => {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    
    // Recursive function to mark all connected land as visited
    const dfs = (i, j) => {
        // i < 0 || i >= m: checks whether the row index i is within the valid range of 0 to m-1; not out of the grid's boundaries
        // j < 0 || j >= n: checks whether the column index j is within the valid range of 0 to n-1; not out of the grid's boundaries
        // grid[i][j] === '0': checks whether the current cell is considered water
        if ((i < 0) || (i >= m) || (j < 0) || (j >= n) || (grid[i][j] === '0')) {
            return;
        }

        grid[i][j] = '0'; // mark as visited to prevent revisiting
        // explores neighboring cells
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    
    // Loop through each cell in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // If we encounter unvisited land, increment the count and mark
            // all connected land as visited using dfs
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    
    // Return the count of distinct islands
    return count;
};