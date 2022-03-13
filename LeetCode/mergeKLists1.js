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
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    let ans = lists[0];
    for (let i = 1; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i])
    }

    return ans;
};

 function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            cur = cur.next;
            l1 = l1.next;
        } else {
            cur.next = l2;
            cur = cur.next;
            l2 = l2.next;
        }
    }

    if (l1 == null) {
        cur.next = l2;
    } else {
        cur.next = l1;
    }
    let ans = dummy.next;
    delete dummy;
    return ans;
};



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}