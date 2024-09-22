/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 && list2) {
        const list1Val = list1?.val;
        const list2Val = list2?.val;

        if (list1Val < list2Val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next
        }
        current = current.next
    }

    if (list1) {
        current.next = list1
    }
    if (list2) {
        current.next = list2
    }

    return dummy.next
};