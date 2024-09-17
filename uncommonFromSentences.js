/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const map = new Map();
    const words = []

    for (const char of s1.split(' ')) {
        map.set(char, 1 + (map.get(char) ?? 0))
    }

    for (const char of s2.split(' ')) {
        map.set(char, 1 + (map.get(char) ?? 0))
    }

    for (const [key, val] of map.entries()) {
        if (val === 1) words.push(key);
    }

    return words
};
