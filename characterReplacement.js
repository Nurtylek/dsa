/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const countMap = new Map();

    let maxFreq = 0;
    let left = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        countMap.set(char, (countMap.get(char) || 0) + 1);

        // Update maxFreq
        maxFreq = Math.max(maxFreq, countMap.get(char));

        const windowSize = right - left + 1;

        // If the remaining characters (i.e., window size - maxFreq) exceed k, shrink the window
        if (windowSize - maxFreq > k) {
            countMap.set(s[left], countMap.get(s[left]) - 1);
            left++; // shrink the window from the left
        }

        longest = Math.max(longest, right - left + 1);
    }

    return longest
}
