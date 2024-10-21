/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    const result = [];

    while (a > 0 || b > 0) {
        if (result.length >= 2 && result[result.length - 1] === result[result.length - 2]) {
            // If the last two characters are the same, append the opposite character
            if (result[result.length - 1] === 'a') {
                result.push('b');
                b--;
            } else {
                result.push('a');
                a--;
            }
        } else {
            // Append the character that still has a higher count
            if (a > b) {
                result.push('a');
                a--;
            } else {
                result.push('b');
                b--;
            }
        }
    }

    return result.join('');
};
