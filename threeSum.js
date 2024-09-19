/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const answer = [];
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        const leftVal = nums[i];

        while (left < right) {
            const leftLeftVal = nums[left];
            const rightVal = nums[right];
            const sum = leftLeftVal + leftVal + rightVal

            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                answer.push([leftVal, nums[left], nums[right]]);

                // Move both pointers to avoid duplicates
                left++;
                right--;

                // Skip duplicate values for the second element
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // Skip duplicate values for the third element
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return answer
};
