/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    //看了官方的答案，思路：不用真的构造一棵字典树将值放进去。从将字典树进行先序遍历可以看出，字典前缀从小到大排序。
    //步骤：1.通过上述的特性，找到那棵容纳目标的子树（确认首个前缀）
    //2.以这个前缀开始逐层向下找到目标。
    let curr = 1;
    k--;
    while (k > 0) {
        let step = getSteps(curr, n);
        if (step <= k) {
            //当子树的节点数小于k时，说明目标不在这颗子树上,去兄弟子树上寻找（实现步骤1）
            curr++;
            k -= step;
        } else {
            //在该子树上，向子树下层寻找。（实现步骤2）
            curr *= 10;
            k--;
        }
    }
    return curr;
};
const getSteps = (curr, n) => {
    //获取以curr为根节点的子树，总节点数
    let step = 0;
    let first = curr, last = curr;
    while (first <= n) {
        step += Math.min(last, n) - first + 1;
        first = 10 * first;
        last = 10 * last + 9;
    }
    return step;
}
console.log(findKthNumber(13, 2))