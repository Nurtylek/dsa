const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const COLS = board[0].length, ROWS = board.length, seen = new Set();

    function dfs(row, col, i = 0) {
        const positonKey = row + '-' + col;

        if (i === word.length) return true

        if (
            Math.min(row, col) < 0 ||
            row >= ROWS ||
            col >= COLS ||
            seen.has(positonKey) ||
            word[i] !== board[row][col]
        ) return false;

        seen.add(positonKey);

        for (const [dr, dt] of dirs) {
            if (dfs(dr + row, dt + col, i + 1)) {
                return true
            }
        }

        seen.delete(positonKey);
        return false;
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (dfs(row, col)) return true
        }
    }

    return false
};
