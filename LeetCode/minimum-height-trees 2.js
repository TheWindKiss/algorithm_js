/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
//拓扑排序
//思路实现具体去看官方的方法三
//简单说明：根节点必然在靠近里面的节点，所以我们可以从边缘开始，先将度为1的节点都排除，
//原先的节点排出后，第二层的节点度就变为1，继续排除直到留下两个（最长路径长度为偶数的情况）或者一个节点就是所求
//https://leetcode-cn.com/problems/minimum-height-trees/solution/zui-xiao-gao-du-shu-by-leetcode-solution-6v6f/
var findMinHeightTrees = function (n, edges) {
    if(n===1)return [0];
    const ans = [];
    const degree = new Array(n).fill(0);
    const adj = new Array(n).fill(0).map(() => []);
    for (let [x, y] of edges) {
        adj[x].push(y);
        adj[y].push(x);
        degree[x]++;
        degree[y]++;
    }
    const collect = [];
    for (let i = 0; i < n; i++) {
        //收集第一批度为1的节点
        if (degree[i] === 1) {
            collect.push(i);
        }
    }
    let remainNodes = n;
    while (remainNodes > 2) {
        const size = collect.length;
        remainNodes -= size;
        for (let i = 0; i < size; i++) {
            const curr = collect.shift();
            for (let v of adj[curr]) {
                if (--degree[v] === 1) {
                    collect.push(v);
                }
            }
        }
    }
    while (collect.length) {
        ans.push(collect.shift());
    }
    return ans;
}
console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]))