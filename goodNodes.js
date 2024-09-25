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
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, parentVal) {
        if (!node) return;

        let maxVal = Math.max(node.val, parentVal)

        dfs(node.left, maxVal);

        if (node.val >= parentVal) {
            count++
        }

        dfs(node.right, maxVal);
    }

    dfs(root, root.val);

    return count
};
