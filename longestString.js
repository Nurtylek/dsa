/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    let ans = 1;

    if (x === y) {
        ans = 2 * Math.min(x, y);
    } else {
        ans = 2 * Math.min(x, y) + 1;
    }

    ans = ans + z;

    return ans * 2
};
