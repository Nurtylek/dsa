/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    function dfs(str = "", openCount = 0, closeCount = 0) {
        // Base case: if both openCount and closeCount have reached n
        if (openCount === n && closeCount === n) {
            res.push(str);
            return;
        }

        // If we can still add an open parenthesis
        if (openCount < n) {
            dfs(str + "(", openCount + 1, closeCount);
        }

        // If we can still add a close parenthesis (only if closeCount < openCount)
        if (closeCount < openCount) {
            dfs(str + ")", openCount, closeCount + 1);
        }
    }

    dfs();

    return res;
};
