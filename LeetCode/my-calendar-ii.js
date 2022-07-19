//线段树练习
const N = 1e9;
var MyCalendarTwo = function () {
    this.st = new SegmentTree()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    if (this.st.query(this.st.root, 0, N, start, end - 1) < 2) {
        this.st.update(this.st.root, 0, N, start, end - 1, 1)
        return true
    }
    return false
};
class SegNode {
    constructor() {
        this.ls = this.rs = null
        this.val = this.add = 0
    }
}

class SegmentTree {
    constructor() {
        this.root = new SegNode()
    }
    update(node, lc, rc, l, r, v) {
        if (l <= lc && rc <= r) {
            node.val += v
            node.add += v
            return
        }
        this.pushdown(node)
        const mid = lc + rc >> 1
        if (l <= mid) {
            this.update(node.ls, lc, mid, l, r, v)
        }
        if (r > mid) {
            this.update(node.rs, mid + 1, rc, l, r, v)
        }
        this.pushup(node)
    }

    query(node, lc, rc, l, r) {
        if (l <= lc && rc <= r) {
            return node.val
        }
        this.pushdown(node)
        let ans = 0
        const mid = lc + rc >> 1
        if (l <= mid) {
            ans = this.query(node.ls, lc, mid, l, r)
        }
        if (r > mid) {
            ans = Math.max(ans, this.query(node.rs, mid + 1, rc, l, r))
        }
        return ans
    }

    pushup(node) {
        node.val = Math.max(node.ls.val, node.rs.val)
    }

    pushdown(node) {
        if (node.ls == null) {
            node.ls = new SegNode()
        }
        if (node.rs == null) {
            node.rs = new SegNode()
        }
        if (node.add == 0) {
            return
        }
        node.ls.add += node.add
        node.ls.val += node.add
        node.rs.add += node.add
        node.rs.val += node.add
        node.add = 0
    }
}
    /**
* Your MyCalendarTwo object will be instantiated and called as such:
* var obj = new MyCalendarTwo()
* var param_1 = obj.book(start,end)
*/