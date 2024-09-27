/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const map = {   
        "}": "{",
        ")": "(",
        "]": "["
    };

    // Loop over each character in the string
    for (const char of s) {
        // If the character is a closing bracket
        if (map[char]) {
            // Check if the top of the stack matches the corresponding opening bracket
            if (stack.length > 0 && stack.at(-1) === map[char]) {
                stack.pop(); // If it matches, pop the opening bracket from the stack
            } else {
                return false; // If it doesn't match, the string is invalid
            }
        } else {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    return stack.length === 0;
};
