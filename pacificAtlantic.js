const DIRS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const COLS = heights[0].length;
    const ROWS = heights.length;

    const pacific = new Set();
    const atlantic = new Set();

    function dfs(set = new Set(), row, col, prevValue = 0) {
        const key = row + '-' + col;

        if (
            Math.min(row, col) < 0 ||
            row >= ROWS ||
            col >= COLS ||
            set.has(key) ||
            heights[row][col] < prevValue
        ) return;

        set.add(key);

        for (const [dr, dt] of DIRS) {
            dfs(set, row + dr, col + dt, heights[row][col]);
        }
    }

    for (let col = 0; col < COLS; col++) {
        // atlantic
        dfs(atlantic, ROWS - 1, col);

        // pacific
        dfs(pacific, 0, col)
    }

    for (let row = 0; row < ROWS; row++) {
        // atlantic
        dfs(atlantic, row, COLS - 1);

        // pacific
        dfs(pacific, row, 0);
    }

    const res = [];

    for (const key of pacific) {
        if (atlantic.has(key)) {
            const [row, col] = key.split('-');
            res.push([+row, +col]);
        }
    }

    return res;
};
