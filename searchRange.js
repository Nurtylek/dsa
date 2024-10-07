/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const left = search(nums, target, false);
    const right = search(nums, target);

    return [left, right]
};

function search(nums, target, isRight = true) {
    let left = 0;
    let right = nums.length - 1;

    let i = -1

    while (left <= right) {
        const middle = left + right >> 1;

        if (target > nums[middle]) {
            left = middle + 1
        } else if (target < nums[middle]) {
            right = middle - 1
        } else {
            i = middle;
            if (isRight) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }

    return i
}
