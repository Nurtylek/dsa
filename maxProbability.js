/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const adj = buildAdj(edges, succProb);
    const maxHeap = new MaxPriorityQueue({
        priority: (item) => item[0]
    });

    maxHeap.enqueue([1, start_node]);
    const seen = new Set();

    while (!maxHeap.isEmpty()) {
        const [probability, node] = maxHeap.dequeue()?.element;

        if (seen.has(node)) continue;
        seen.add(node);

        if (node === end_node) return probability;
        if (!adj.has(node)) continue;

        for (const neighbour of adj.get(node)) {
            if (!seen.has(neighbour)) {
                maxHeap.enqueue([probability * neighbour[1], neighbour[0]]);
            }
        }
    }

    return 0
};

function buildAdj(edges, succProb) {
    const map = new Map();

    for (const [index, [src, target]] of edges.entries()) {
        if (!map.has(src)) map.set(src, []);
        if (!map.has(target)) map.set(target, []);

        map.get(src).push([target, succProb[index]]);
        map.get(target).push([src, succProb[index]]);
    }

    return map
}
