/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const minHeap = new MinPriorityQueue({ priority: (element) => element.val });

    for (const head of lists) {
        if (head) minHeap.enqueue(head)
    }

    const dummy = new ListNode();
    let res = dummy;

    while (!minHeap.isEmpty()) {
        const element = minHeap.dequeue()?.element;
        
        res.next = new ListNode(element.val)
        res = res.next;

        if (element.next) {
            minHeap.enqueue(element.next);
        }
    }

    return dummy.next
};
