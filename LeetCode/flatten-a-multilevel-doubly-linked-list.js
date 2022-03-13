var flatten = function (head) {
    const dfs = (node) => {
        let cur = node;
        let last = null;
        while (cur) {
            let next = cur.next;
            if (cur.child) {
                const childLast = dfs(cur.child);
                next = cur.next;
                cur.child.prev = cur;
                if (next != null) {
                    childLast.next = next;
                    next.prev = childLast;
                }
                cur.child = null;
                last = childLast;
            } else {
                last = cur;
            }
            cur = next;
        }
        return last;
    }
    dfs(head);
    return head;
};
