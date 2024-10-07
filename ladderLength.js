/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const adjList = buildAdj([...wordList, beginWord]);

    const seen = new Set();

    const queue = new Queue([beginWord]);
    let shortest = 0;

    while (!queue.isEmpty()) {
        const len = queue.size();

        for (let i = 0; i < len; i++) {
            const word = queue.dequeue();
            seen.add(word);

            if (word === endWord) {
                return shortest + 1;
            }

            for (let i = 0; i < word.length; i++) {
                const key = word.slice(0, i) + '*' + word.slice(i + 1);

                if (!adjList.has(key)) continue;

                for (const item of adjList.get(key)) {
                    if (seen.has(item)) continue;

                    queue.enqueue(item)
                }
            }
        }
        shortest++
    }

    return 0
};

function buildAdj(wordList = []) {
    const map = new Map();

    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const key = word.slice(0, i) + '*' + word.slice(i + 1);

            if (!map.has(key)) {
                map.set(key, [word])
            } else {
                const arr = map.get(key);
                arr.push(word);
                map.set(key, arr)
            }
        }
    }

    return map;
}

/*
    {
        h*t: hot
    }
*/
