/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sumMap = new Map();

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const diff = target - num;

        if (sumMap.has(diff)) {
            return [index, sumMap.get(diff)]
        } else {
            sumMap.set(num, index)
        }
    }
};
