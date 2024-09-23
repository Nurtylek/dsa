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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const res = [];
    const queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        const len = queue.size();
        const currentArr = [];

        for (let i = 0; i < len; i++) {
            const node = queue.dequeue();
            currentArr.push(node.val)

            if (node.left) {
                queue.enqueue(node.left)
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }

        res.push(currentArr);
    }

    return res;
};
