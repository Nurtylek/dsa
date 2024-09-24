/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];  // Tracks the minimum product (for handling negatives)

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        // If the current number is negative, we swap currMax and currMin
        if (num < 0) {
            [currMax, currMin] = [currMin, currMax];
        }

        // Update currMax and currMin
        currMax = Math.max(num, currMax * num);
        currMin = Math.min(num, currMin * num);

        // Update the maximum product found so far
        maxSoFar = Math.max(maxSoFar, currMax);
    }

    return maxSoFar;
};
