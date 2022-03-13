/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let ans = 0;
    for (let p of points) {
        let map = new Map();
        for (let q of points) {
            const dis = distance(p, q);
            map.set(dis, map.get(dis) === undefined ? 1 : map.get(dis) + 1);
        }
        for ([key, value] of map) {
            let m = value;
            ans += m * (m - 1);
        }

    }
    return ans
};
function distance(a, b) {
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)
}
console.log(numberOfBoomerangs([[1, 1], [2, 2], [3, 3]]))