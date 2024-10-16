/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const result = [];

    const maxHeap = new MaxPriorityQueue();

    a > 0 && maxHeap.enqueue('a', a);
    b > 0 && maxHeap.enqueue('b', b);
    c > 0 && maxHeap.enqueue('c', c);

    while (!maxHeap.isEmpty()) {
        const { element, priority } = maxHeap.dequeue();

        if (
            result.length >= 2 &&
            result.at(-1) === element && 
            result.at(-2) === element
        ) {
            if (maxHeap.size() === 0) break;
            const { element: nextElement, priority: nextPriority } = maxHeap.dequeue();

            result.push(nextElement);

            if (nextPriority - 1 > 0) {
                maxHeap.enqueue(nextElement, nextPriority - 1);
            }

            maxHeap.enqueue(element, priority);
        } else {
            result.push(element);

            if (priority - 1 > 0) {
                maxHeap.enqueue(element, priority - 1);
            }
        }
    }

    return result.join("");
};
