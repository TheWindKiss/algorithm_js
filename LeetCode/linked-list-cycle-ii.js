/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
/*     let set=new Set();
    while(head){
        if(set.has(head)){
            return head
        }
        set.add(head);
        head=head.next
    };
    return null */

    if(head == null || head.next == null) {
        return null;
    }
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            fast = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        } 
    }
    return null
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}