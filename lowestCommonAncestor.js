/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    function getDepth(node) {
        let depth = 0;

        while (node) {
            node = node.parent;
            depth++
        }

        return depth
    }

    let pDepth = getDepth(p);
    let qDepth = getDepth(q);

    while (pDepth > qDepth) {
        p = p.parent;
        pDepth--
    }

    while (qDepth > pDepth) {
        q = q.parent;
        qDepth--
    }

    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }

    return q
};
