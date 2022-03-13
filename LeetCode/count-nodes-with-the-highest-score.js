/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
    let n = parents.length;
    const children = new Array(n).fill(0).map((x) => []);
    let cnt = 0, maxScore = 0;
    for (let i = 0; i < n; i++) {
        if (parents[i] !== -1) {
            children[parents[i]].push(i)
        }
    }
    const dfs = (node) => {
        let score = 1;
        let size = 1;//为以 node 为根节点的子树大小
        if (children[node].length) {
            for (let child of children[node]) {
                let sizeOfChild = dfs(child);
                score *= sizeOfChild;
                size += sizeOfChild;
            }
        }
        if (size < n) {// 当node 不是根节点,乘以 拆解出来以node为子树的第三棵树大小
            score *= (n - size);
        }
        console.log(`size:${size},score:${score}`);
        if (score === maxScore) {
            cnt++;
        } else if (score > maxScore) {
            cnt = 1;
            maxScore = score;
        }
        return size;
    }
    dfs(0);
    return cnt;
};
console.log(countHighestScoreNodes([-1, 2, 0, 2, 0]))