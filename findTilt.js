/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    let tilt = 0;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        const absDiff = Math.abs(left - right);
        tilt += absDiff
        return left + right + node.val;
    }

    dfs(root);
    return tilt;
};
