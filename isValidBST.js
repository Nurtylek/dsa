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
 * @return {boolean}
 */
var isValidBST = function(root) {

    function dfs(node, max, min) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

       return dfs(node.left, node.val, min) && dfs(node.right, max, node.val);
    }

    return dfs(root, max = Infinity, min = -Infinity);
};
