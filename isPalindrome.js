/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !isAlphaNumeric(s[left])) {
            left++
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--
        }

        if (s[left].toLowerCase() !== s[right].toLocaleLowerCase()) return false;
        left++;
        right--
    }

    return true
};

function isAlphaNumeric(char) {
    const charCode = char.charCodeAt(0);
    const isLowerCaseLetter = charCode >= 97 && charCode <= 122;
    const isUpperCaseLetter = charCode >= 65 && charCode <= 90;
    const isNumber = charCode >= 48 && charCode <= 57;

    return isLowerCaseLetter || isUpperCaseLetter || isNumber
}
