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
 * @return {TreeNode[]}
 */
function findDuplicateSubtrees(root) {
    const cnt = new Map(); // To count subtree representations
    const res = []; // To store the results

    const traverse = (node) => {
        if (!node) return ""; // Return an empty string for null nodes

        // Create a string representation of the subtree
        const representation = `(${traverse(node.left)})${node.val}(${traverse(node.right)})`;

        // Count the occurrences of this representation
        cnt.set(representation, (cnt.get(representation) || 0) + 1);

        // If it's the second time we see this representation, add the node to results
        if (cnt.get(representation) === 2) {
            res.push(node);
        }

        return representation; // Return the representation for parent calls
    };

    traverse(root); // Start the traversal from the root
    return res; // Return the list of duplicate subtrees
}
