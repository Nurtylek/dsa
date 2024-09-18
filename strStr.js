/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let left = 0;

        // Check if the substring of haystack starting at i matches the needle
        while (left < needle.length && haystack[i + left] === needle[left]) {
            left++;
        }

        // If we've matched the entire needle, return the starting index
        if (left === needle.length) {
            return i;
        }
    }

    return -1
};
