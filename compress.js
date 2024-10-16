/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let left = 0;
    let count = 1;

    for (let right = 1; right <= chars.length; right++) {
        if (chars[right] === chars[right - 1]) {
            count++
        } else {
            chars[left] = chars[right - 1];
            left++;

            if (count > 1) {
                let countStr = count.toString();
                for (let i = 0; i < countStr.length; i++) {
                    chars[left] = countStr[i];
                    left++
                }
            }
            count = 1
        }
    }

    return left
};
