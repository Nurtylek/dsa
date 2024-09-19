/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const locationMap = new Map();

    while (headB) {
        locationMap.set(headB, headB)
        headB = headB.next
    }

    while (headA) {
        if (locationMap.has(headA)) {
            return headA
        }
        headA = headA.next
    }
};
