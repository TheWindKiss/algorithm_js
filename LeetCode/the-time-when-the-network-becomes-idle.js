/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
    //思路 构造图，通过广度优先遍历，找到每个数据服务器（非0）到主服务器（0）的最短路径
    //每个服务器耗费的时间可以总结出公式:patience[v]*floor((2*dist-1)/patience[v]) +2*dist+1;。
    //遍历所有服务器找到耗时最长的就是答案
    const n = patience.length, gragh = new Map();
    for (const [u, v] of edges) {
        let l1 = gragh.get(u) !== undefined ? gragh.get(u) : [];
        l1.push(v)
        let l2 = gragh.get(v) !== undefined ? gragh.get(v) : [];
        l2.push(u);
        gragh.set(u, l1);
        gragh.set(v, l2)
    }
    const distance = new Array(n).fill(-1);
    distance[0] = 0;
    let queue = [0], len = 0;
    while (queue.length > 0) {
        len += 1;
        let next = [];
        for (const server of queue) {
            for (const other of gragh.get(server)) {
                if (distance[other] === -1) {
                    distance[other] = len;
                    next.push(other);
                }
            }
        }
        queue = next;
    }
    let ans = 0;
    for (let i = 1; i < n; i++) {
        const d = distance[i], p = patience[i];
        ans = Math.max(ans, Math.floor((d * 2 - 1) / p) * p + d * 2);
    }
    return ans + 1;
};
console.log(networkBecomesIdle([[0, 1], [1, 2]], [0, 2, 1]))