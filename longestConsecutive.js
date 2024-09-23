/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of nums) {
        const diff = num - 1;

        // start of sequence
        if (!set.has(diff)) {
            let length = 1;
            while (set.has(length + num)) {
                length++
            }

            longest = Math.max(longest, length)
        }
    }

    return longest
};
