/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /*
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."]
        [".","9","8",".",".",".",".","6","."]
        ["8",".",".",".","6",".",".",".","3"]
        ["4",".",".","8",".","3",".",".","1"]
        ["7",".",".",".","2",".",".",".","6"]
        [".","6",".",".",".",".","2","8","."]
        [".",".",".","4","1","9",".",".","5"]
        [".",".",".",".","8",".",".","7","9"]
    ]
    */
    const ROWS = 9;
    const COLS = 9;
    const rowsSet = [];
    const colsSet = [];
    const boxSet = [];

    for (let row = 0; row < ROWS; row++) {
        rowsSet[row] = rowsSet[row] ?? new Set();

        for (let col = 0; col < COLS; col++) {
            const val = board[row][col];

            if (val === '.') continue

            // row init
            if (rowsSet[row].has(val)) return false
            rowsSet[row].add(val);

            // col init
            colsSet[col] = colsSet[col] ?? new Set();
            if (colsSet[col].has(val)) return false
            colsSet[col].add(val);

            // box init
            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            boxSet[boxIndex] = boxSet[boxIndex] ?? new Set();
            if (boxSet[boxIndex].has(val)) return false
            boxSet[boxIndex].add(val);
        }
    }

    return true
};
