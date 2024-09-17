/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // ["eat","tea","tan","ate","nat","bat"]
    /*
        eat: [eat, tea, ate],
        tan: [tan, nat],
        bat: [bat]
    */
    const map = new Map();

    for (const str of strs) {
        const freq = new Array(26).fill(0);

        for (const char of str) {
            const alphabetPosition = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[alphabetPosition]++
        }
        const hash = freq.toString();
        const val = map.get(hash) ?? []
        val.push(str);
        map.set(hash, val)
    }

    return [...map.values()]
};
