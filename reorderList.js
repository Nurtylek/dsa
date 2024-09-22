/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    let secondPartHead = reverse(slow.next);
    slow.next = null;

    let firstPartHead = head;

    while (secondPartHead) {
        const firstNext = firstPartHead.next;
        const secondNext = secondPartHead.next;

        firstPartHead.next = secondPartHead;
        secondPartHead.next = firstNext;

        secondPartHead = secondNext;
        firstPartHead = firstNext;
    }
};

function reverse(head) {
    let prev = null;

    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
