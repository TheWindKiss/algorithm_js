/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const result = new ListNode();
    let cur = result;
    let carried = 0;
    while (l1 || l2) {
        let sum = carried;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next
        }
        carried = Math.floor(sum / 10);
        cur.next = new ListNode(sum%10);
        cur = cur.next
    }
    if (carried) {
        cur.next = new ListNode(carried)
    }
    return result
}