/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const characterMap = {};

    for (const char of s) {
        characterMap[char] = characterMap[char] ?? 0;
        characterMap[char]++;
    }

    for (const char of t) {
        if (characterMap[char]) {
            characterMap[char]--;
            if (characterMap[char] < 0) return false
        } else {
            return false
        }
    }

    return true
};
