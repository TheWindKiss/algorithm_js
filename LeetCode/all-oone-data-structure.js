/**
 * 之前没有遇到过这种题目，首次碰到先看了官方的题解。
 * 要求：每次操作的时间复杂度为常数值。
 * 看到有求最值的函数出现，首先能想的到肯定就是有某个属性维护整体数据的有序性，这样最值就肯定出现在头尾
 * 然后看插入，删除操作。
 * 插入：既然已经确定有某个属性进行顺序的维护，插入肯定是要找到已经维护数据中能插入的位置才行。要时间复杂度为常数，哈希表就是一个不错的选择了
 * 删除操作和插入的逻辑类似。
 * 所以综合下来，这个维护顺序的属性使用hashMap作为存储。
 * 便于插入和删除，使用双向链表作为整体的数据存储。
 */
var AllOne = function () {
    this.root = new Node();
    this.root.prev = this.root;
    this.root.next = this.root;
    this.nodes = new Map();//维护当前所在节点
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    if (this.nodes.has(key)) {
        const cur = this.nodes.get(key);
        const next = cur.next;
        if (next === this.root || next.count > cur.count + 1) {
            this.nodes.set(key, cur.insert(new Node(key, cur.count + 1)))
        } else {
            next.keys.add(key);
            this.nodes.set(key, next);
        }
        cur.keys.delete(key);
        if (cur.keys.size == 0) {
            cur.remove();
        }
    } else {
        if (this.root.next === this.root || this.root.next.count > 1) {
            this.nodes.set(key, this.root.insert(new Node(key, 1)))
        } else {
            this.root.next.keys.add(key);
            this.nodes.set(key, this.root.next);
        }
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    const cur = this.nodes.get(key);
    if (cur.count === 1) {
        this.nodes.delete(key);
    } else {
        const pre = cur.prev;
        if (pre === this.root || pre.count < cur.count - 1) {
            this.nodes.set(key, cur.prev.insert(new Node(key, cur.count - 1)))
        } else {
            pre.keys.add(key);
            this.nodes.set(key, pre);
        }
    }
    cur.keys.delete(key);
    if (cur.keys.size == 0) {
        cur.remove();
    }

};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    if (!this.root.prev) {
        return ''
    }
    return [...this.root.prev.keys][0];
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    if(!this.root.next){
        return ''
    }
    return [...this.root.next.keys][0];
};

class Node {
    //Node类，有insert,remove方法。
    constructor(key, count) {
        count ? this.count = count : 0;
        this.keys = new Set();
        key ? this.keys.add(key) : this.keys.add('')
    }
    insert(node) {
        node.prev = this;
        node.next = this.next;
        node.prev.next = node;
        node.next.prev = node;
        return node;
    }
    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    }
}
/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */