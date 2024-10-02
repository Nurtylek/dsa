const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    if (grid.length === 1) return 0;

    const COLS = grid[0].length, ROWS = grid.length;
    const seen = new Set(), minHeap = new MinPriorityQueue({
        priority: a => a.value
    });
    let time = 0;

    // value, position
    minHeap.enqueue({
        value: grid[0][0],
        position: [0, 0]
    });

    while (!minHeap.isEmpty()) {
        const { value, position: [row, col] } = minHeap.dequeue().element;

        time = Math.max(time, value);

        seen.add(value);

        if (COLS - 1 === col && ROWS - 1 === row) return time;

        for (const [dr, dt] of dirs) {
            if (
                Math.min(row + dr, col + dt) < 0 ||
                row + dr >= ROWS ||
                col + dt >= COLS ||
                seen.has(grid[dr + row][dt + col])
            ) continue;
            const val = grid[dr + row][dt + col];

            minHeap.enqueue({
                value: val,
                position: [dr + row, dt + col]
            })
        }
    }

    return -1;
};

