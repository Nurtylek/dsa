/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // 
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) return middle

        if (nums[middle] >= nums[right]) {
            // Left side is sorted
            if (nums[left] <= target && target < nums[middle]) {
                right = middle - 1; // Target is in the left sorted part
            } else {
                left = middle + 1; // Target is in the right unsorted part
            }
        } else {
            // Right side is sorted
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1; // Target is in the right sorted part
            } else {
                right = middle - 1; // Target is in the left unsorted part
            }
        }
    }
    return -1;
};
