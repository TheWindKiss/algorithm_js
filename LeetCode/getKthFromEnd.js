/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let left = head;
    let right = head;
    let t = 0;
    while (left) {
        if (t >= k) {
            right = right.next;
        }
        left = left.next;
        t++
    }
    return right
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}