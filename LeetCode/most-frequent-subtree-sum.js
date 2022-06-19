/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    //思路：递归计算每个节点的字数和，使用哈希表进行存储计数，最后遍历哈希表找出最大计数组成数组。
    const map = new Map();
    let maxCnt = -1;
    const dfs = (root) => {
        if (root == null) return 0;
        let lSum = root.left ? dfs(root.left) : 0, rSum = root.right ? dfs(root.right) : 0;
        let sum = lSum + root.val + rSum;
        map.set(sum, (map.get(sum) || 0) + 1);
        let cnt = map.get(sum);
        if (cnt >= maxCnt) maxCnt = cnt;
        return sum;
    }
    dfs(root);
    let ans = [];
    map.forEach((v, k) => {
        if (maxCnt === v) ans.push(k);
    })
    return ans;
}