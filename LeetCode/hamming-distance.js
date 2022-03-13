/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    /*  if (x > y) {
         let temp = x;
         x = y;
         y = temp;
     }
     let dx = x.toString(2);
     let dy = y.toString(2);
     const l = dy.length;
     if (dx.length < l) {
         for (i = dx.length; i < l; i++) {
             dx = "0" + dx;
         }
     }
     let distance = 0;
     for (let i = 0; i < l; i++) {
         if (dx[i] != dy[i]) {
             distance++;
         }
     }
     return distance; */
    /*  let s = x ^ y, ret = 0;
    while (s != 0) {
        s &= s - 1;//Brian Kernighan 算法跳过0的位数   具体算法原理wiki。
        ret++;
    }
    return ret; */
    return (x ^ y).toString(2).match(/1/g) == null ? 0: (x ^ y).toString(2).match(/1/g || '').length;
};
console.log(hammingDistance(0, 0))