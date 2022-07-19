var MyCalendarTwo = function () {
    //使用对象的number键会自动排序的特点，模拟了treeMap;
    this.cnt = {}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    let cnt = this.cnt, max = 0;
    cnt[start] = (cnt[start] ?? 0) + 1;
    cnt[end] = (cnt[end] ?? 0) - 1;
    const values = Object.values(cnt);
    for (let v of values) {
        max += v;
        if (max > 2) {
            cnt[start] = cnt[start] - 1;
            cnt[end] = cnt[end] + 1;
            return false;
        }
    }
    return true;
};

/**
* Your MyCalendarTwo object will be instantiated and called as such:
* var obj = new MyCalendarTwo()
* var param_1 = obj.book(start,end)
*/