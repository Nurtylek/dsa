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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let curr = root;

    while (curr) {
        if (curr.left) {
            let rightMost = curr.left;

            while (rightMost.right) {
                rightMost = rightMost.right
            }

            // Connect the right subtree to the rightmost node of the left subtree
            rightMost.right = curr.right;

            // Move the left subtree to the right
            curr.right = curr.left;
            curr.left = null;
        }

        curr = curr.right
    }
};
