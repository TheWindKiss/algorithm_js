/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.list = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let result = this.list.get(key);
    if (result!==undefined) {
        this.list.delete(key);
        this.list.set(key, result);
        return result;
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.list.has(key)) {
        this.list.delete(key);
    }
    this.list.set(key, value);
    if (this.list.size> this.capacity) {
        let keyIterator=this.list.keys();
        this.list.delete(keyIterator.next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */