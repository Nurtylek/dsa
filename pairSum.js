/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let max = 0;

    let reversed = reverse(slow.next);
    slow.next = null;

    let current = head;

    while (current && reversed) {
        max = Math.max(max, current.val + reversed.val);
        reversed = reversed.next;
        current = current.next;
    }

    return max;
};

function reverse(node) {
    let prev = null;

    while (node) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next
    }

    return prev;
}
