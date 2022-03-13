/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    //使用快慢指针解决问题，如果有环的话，快指针总会遇到慢指针
    if (head === null || head.next === null) {
        return false;
    }
    let fast = head.next;
    let slow = head;
    while (fast !== slow) {
        if (fast === null || fast.next === null) {
            return false
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}