/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
    /**
     * 思路：从正向的[sx,sy]到[tx,ty]转换比较困难。但是从[tx,ty]逆推就比较容易，总是大的减去小的，当tx,ty有小于起点数的时候说明结束，判断结果
     * 直接模拟思路，发现超时，需要进行改进
     * 通过状态分析，我们能够发现一种较快逼近目的点的方式
     * 当tx>ty时多次相减的结果能归约为一次减去n=(tx - sx) / ty)次(n最小为1)，
     * 当ty>tx时多次相减的结果能归约为一次减去n=(ty - sy) / tx)次(n最小为1)，
     * 
     */
    while (tx > 0 && ty > 0) {
        if (tx === sx && ty === sy) return true;
        if (tx > ty) {
            tx -= Math.max(Math.floor((tx - sx) / ty), 1) * ty;
        } else {
            ty -= Math.max(Math.floor((ty - sy) / tx), 1) * tx;
        }
    }

    return false;
};
console.log(reachingPoints(1, 1, 3, 5))