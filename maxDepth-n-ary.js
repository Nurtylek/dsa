/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    function dfs(node) {
        if (!node) return 0
        else if (node.children.length === 0) return 1
        else {
            let depth = 0;

            for (let i = 0; i < node.children.length; i++) {
                const currDepth = dfs(node.children[i]);
                depth = Math.max(depth, currDepth);
            }

            return depth + 1;
        }
    }

    return dfs(root);
};
