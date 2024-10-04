const DIRS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const COLS = rooms[0].length;
    const ROWS = rooms.length;
    const queue = new Queue();
    const seen = new Set();

    /*
        SC: O(M*N)
        TC: O(M*N)
    */

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (rooms[row][col] === 0) {
                queue.enqueue([row, col]);
            }
        }
    }

    let distance = 1;

    while (!queue.isEmpty()) {
        const len = queue.size();

        for (let i = 0; i < len; i++) {
            const [row, col] = queue.dequeue();

            for (const [dr, dt] of DIRS) {
                const newRow = dr + row;
                const newCol = dt + col;

                const position = newRow + '-' + newCol;

                if (
                    Math.min(newCol, newRow) < 0 ||
                    newRow >= ROWS ||
                    newCol >= COLS ||
                    rooms[newRow][newCol] === -1 ||
                    seen.has(position)
                ) continue;

                seen.add(position);
                if (rooms[newRow][newCol] !== 0) {
                    rooms[newRow][newCol] = distance;
                    queue.enqueue([newRow, newCol]);
                }
            }
        }
        distance++
    }
};
