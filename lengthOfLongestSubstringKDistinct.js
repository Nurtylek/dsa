/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    // if (k === 0) return 0
    // if (s.length === 1) return 1

    const map = new Map();
    let left = 0;

    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) ?? 0) + 1);

        while (map.size > k) {
            map.set(s[left], map.get(s[left]) - 1);

            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++
        }

        longest = Math.max(longest, right - left + 1)
    }

    return longest
};
