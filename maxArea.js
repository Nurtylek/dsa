/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const width = right - left;
        let currentHeight = 1

        if (leftHeight < rightHeight) {
            currentHeight = leftHeight
            left++
        } else {
            currentHeight = rightHeight;
            right--
        }
        max = Math.max(max, currentHeight * width)
    }

    return max
};
