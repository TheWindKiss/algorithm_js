//线段树还是不会，继续学习
const MAX_RANGE = 1e9 + 7
var RangeModule = function () {
    this.st = new STree()
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
    this.st.update(this.st.root, 1, MAX_RANGE, left, right - 1, true)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
    return this.st.query(this.st.root, 1, MAX_RANGE, left, right - 1)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
    this.st.update(this.st.root, 1, MAX_RANGE, left, right - 1, false)
};

class SNode {
    constructor() {
        this.ls = this.rs = null;
        this.val = this.add = false;
    }
}
class STree {
    constructor() {
        this.root = new SNode();
    }
    update(node, lc, rc, l, r, v) {
        if (l <= lc && r >= rc) {
            node.val = v;
            node.add = true;
            return
        }
        this.pushdown(node);
        const mid = (lc + rc) >> 1;
        if (l <= mid) {
            this.update(node.ls, lc, mid, l, r, v);
        }
        if (r > mid) {
            this.update(node.rs, mid + 1, rc, l, r, v)
        }
        this.pushup(node);
    }
    query(node, lc, rc, l, r) {
        if (l <= lc && r >= rc) {
            return node.val;
        }
        this.pushdown(node);
        let ans = true;
        const mid = (lc + rc) >> 1;
        if (l <= mid) {
            ans = ans && this.query(node.ls, lc, mid, l, r)
        }
        if (r > mid) {
            ans = ans && this.query(node.rs, mid + 1, rc, l, r)
        }
        return ans;
    }
    pushup(node) {
        node.val = node.ls.val && node.rs.val
    }
    pushdown(node) {
        if (node.ls == null) node.ls = new SNode();
        if (node.rs == null) node.rs = new SNode();
        if (!node.add) return
        node.ls.add = node.rs.add = true;
        node.ls.val = node.rs.val = node.val;
        node.add = false;
    }
}
/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */