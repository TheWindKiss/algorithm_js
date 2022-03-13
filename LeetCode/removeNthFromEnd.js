/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/* var removeNthFromEnd = function (head, n) {
     // 普通的解法
    //复制链表，next指向head
    let dummy = new ListNode(0, head);
    //获取链表长度
    let len = getLegth(head);
    //将复制链表赋值给游标
    let cur = dummy;
    //循环获取要删除的结点的前一个结点
    for (let i = 1; i < len - n + 1; i++) {
        cur = cur.next
    }
    //将要删除的前一结点的next指向删除结点的后一个结点
    cur.next = cur.next.next;
    //删除复制结点中的最先结点
    let ans = dummy.next;
    delete dummy;
    return ans
} */

/* function getLegth(head) {
    let length = 0;
    while (head) {
        ++length;
        head = head.next
    }
    return length;
} */


/* var removeNthFromEnd = function (head, n) {
    //使用栈的解法
    let dummy = new ListNode(0,head);
    let stack=[];
    let cur=dummy;
    //将结点都推入栈中
    while(cur){
        stack.push(cur);
        cur=cur.next;
    }
    //从栈顶推出n个结点，
    for(i=0;i<n;i++){
        stack.pop();
    }
//推出删除结点的前一个结点
    let prev=stack.pop();
    //删除指定的结点
    prev.next=prev.next.next;
    //删除复制结点中的首个结点，返回结果，并删除复制结点
    let ans = dummy.next;
    delete dummy;
    return ans;
} */
var removeNthFromEnd = function (head, n) {
    //双指针的解法
    let dummy = new ListNode(0,head);
    let first= head;
    let second = dummy;
    for(let i=0;i<n;i++){
        first=first.next
    }
    while(first){
        first=first.next;
        second=second.next;
    }
    second.next=second.next.next;
    let ans = dummy.next;
    delete dummy;
    return ans
}





function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}