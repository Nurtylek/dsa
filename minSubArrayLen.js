/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let longest = Infinity;
    let left = 0;
    let total = 0;

    for (let right = 0; right < nums.length; right++) {
        total += nums[right];

        while (total >= target) {
            longest = Math.min(longest, right - left + 1);
            total -= nums[left];
            left++
        }
    }

    return longest === Infinity ? 0 : longest;
};
