/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
//广度优先查询
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0];
    let ans = [];
    const adj = new Array(n).fill(0).map(() => []);
    for (let [x, y] of edges) {
        adj[x].push(y);
        adj[y].push(x);
    }
    //记录寻找的最长路径
    const parent = new Array(n).fill(-1);
    //以0为起点找到最长的路径，返回终点x
    const x = getLongstNode(0, parent, adj);
    //以x为起点找到最长的路径，返回终点y。x,y的路径就是构造树中最长的路径，中点就是最小高度树的根
    let y = getLongstNode(x, parent, adj);
    const path = []
    //将起点设置为-1，防止死循环
    parent[x] = -1;
    while (y != -1) {
        path.push(y);
        y = parent[y];
    }
    const m = path.length;
    //最长路径长度为偶数的时候，有两个节点能成为根
    if (m % 2 === 0) {
        ans.push(path[m / 2 - 1])
    }
    ans.push(path[Math.floor(m / 2)]);
    return ans;
};
const getLongstNode = (u, parent, adj) => {
    const n = adj.length;
    const visit = new Array(n).fill(false);
    const queue = [];
    queue.push(u);
    visit[u] = true;
    let node = -1;
    while (queue.length) {
        const curr = queue.shift();
        node = curr;
        for (let v of adj[curr]) {
            if (!visit[v]) {
                //记录寻找的路径
                parent[v] = curr;
                visit[v] = true;
                queue.push(v);
            }
        }
    }
    return node;
}
console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]))