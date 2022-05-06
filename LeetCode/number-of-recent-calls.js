//分析，首先请求的区间是[t-3000,t]，t是递增的，所以不用考虑保存区间之外的数据
//思路：将请求保存到一个队列中，维护队列的值都在[t-3000,t]，t为该次访问的时间
var RecentCounter = function () {
    this.counts = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.counts.push(t);
    while (this.counts[0] < t - 3000) {
        this.counts.shift();
    }
    return this.counts.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */