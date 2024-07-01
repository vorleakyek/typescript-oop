/**
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */


function isValidSudoku(board) {
    const mapRow = new Map();
    const mapCol = new Map();
    
    // Check each row has 1-9 with no repetition
    for (let i = 0; i < board.length; i++) { 
        for (let j = 0; j < board[i].length; j++) {
            const currentNumRow = board[i][j];
            if (currentNumRow !== ".") {
                if (mapRow.has(currentNumRow)) {
                    return false;
                }
                mapRow.set(currentNumRow, i);
            }  
        }
        mapRow.clear();
    }
    
    // Check each column has 1-9 with no repetition 
    for (let j = 0; j < board[0].length; j++) { 
        for (let i = 0; i < board.length; i++) {
            const currentNumCol = board[i][j];
            if (currentNumCol !== ".") {
                if (mapCol.has(currentNumCol)) {
                    return false;
                }
                mapCol.set(currentNumCol, j);
            }  
        }
        mapCol.clear();
    }
    
// row 0 1 2 -> col 0 1 2 
// row 0 1 2 -> col 3 4 5 
// row 0 1 2 -> col 6 7 8 

// row 3 4 5 -> col 0 1 2 
// row 3 4 5 -> col 3 4 5 
// row 3 4 5 -> col 6 7 8

// row 6 7 8 -> col 0 1 2 
// row 6 7 8 -> col 3 4 5 
// row 6 7 8 -> col 6 7 8
    
for (let b1 = 0; b1 < 9; b1 += 3) {
        for (let b2 = 0; b2 < 9; b2 += 3) {
            const mapBox = new Map();
            for (let i = b1; i < b1 + 3; i++) {
                for (let j = b2; j < b2 + 3; j++) {
                    const currentNumBox = board[i][j];
                    if (currentNumBox !== ".") {
                        if (mapBox.has(currentNumBox)) {
                            return false;
                        }
                        mapBox.set(currentNumBox, `${i}-${j}`);
                    }
                }
            }
        }
    }    
return true;
};


// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false