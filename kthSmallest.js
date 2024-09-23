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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const items = [];

    const inOrder = node => {
        if (!node) return;

        inOrder(node.left);
        items.push(node.val);
        inOrder(node.right);
    }

    inOrder(root);

    return items[k - 1];
};
