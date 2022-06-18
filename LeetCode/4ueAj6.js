/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    //思路：遍历找到能够插入的位置，注意边界点情况
    let p = head, target = new Node(insertVal);
    if (head === null) {
        //空值的时候自身构建为循环链表
        target.next = target;
        return target;
    }
    p = p.next;
    while (p != head) {
        if (p.val <= p.next.val) {
            //升序情况下找到了能够插入的位置
            if (p.val <= insertVal && p.next.val >= insertVal) {
                break;
            }
        } else {
            //头尾转换处（最大值和最小值的交界处）进行判断是否插入该地
            if (p.val <= insertVal || p.next.val >= insertVal) {
                break;
            }
        }
        p = p.next;
    }
    target.next = p.next;
    p.next = target
    return head;
}