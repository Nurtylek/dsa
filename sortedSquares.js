/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const squares = [];
    let i = right;

    while (left <= right) {
        const leftVal = Math.abs(nums[left]);
        const rightVal = Math.abs(nums[right]);

        if (leftVal > rightVal) {
            squares[i] = leftVal ** 2;
            left++;
        } else {
            squares[i] = rightVal ** 2;
            right--;
        }
        i--;
    }

    return squares;
};
