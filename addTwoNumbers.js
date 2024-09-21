/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let rememberVal = 0;

    while (l1 || l2 || rememberVal) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;

        const valToSave = l1Val + l2Val + rememberVal;
        rememberVal = Math.floor(valToSave / 10);

        current.next = new ListNode(valToSave % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next
    }

    return dummy.next
};
