/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // Create a dummy node that points to the head of the list.
    let dummy = new ListNode(null, head)
    let curr = dummy;

    // Traverse the list and remove elements.
    while (curr.next) {
        if (curr.next.val === val) {
            // Skip the node with the value `val`
            curr.next = curr.next.next;
        } else {
            // Move to the next node.
            curr = curr.next;
        }
    }

    // Return the new head of the list (which might have changed).
    return dummy.next;
};
