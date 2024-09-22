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
var maxPathSum = function(root) {
    let longest = 0;

    function dfs(node, parentVal) {
        if (!node) return 0;

        // Recursively find the maximum path sum of the left and right subtrees
        const left = Math.max(dfs(node.left), 0);  // Ignore negative paths
        const right = Math.max(dfs(node.right), 0); // Ignore negative paths

        // Calculate the price of the current path (root + left + right)
        const currentPathSum = node.val + left + right;

        // Update maxSum if the current path sum is greater
        longest = Math.max(longest, currentPathSum);

        // Return the max gain if continuing the same path with the parent node
        return node.val + Math.max(left, right);
    }

    dfs(root, 0);

    return longest
};
