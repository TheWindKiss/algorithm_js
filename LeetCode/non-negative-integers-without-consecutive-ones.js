/**
 * @param {number} n
 * @return {number}
 */
/* 
我们发现，在高度为 t、根结点为 0 的满二叉树中：其左子结点是高度为 t - 1、根结点为 0 的满二叉树。其右子结点是高度为 t - 1、根结点为 1
 的满二叉树；但是因为路径中不能有连续 1，所以右子结点下只有其左子结点包含的从根结点到叶结点的路径才符合要求，
 而其左子结点是高度为 t - 2、根结点为 0 的满二叉树。
于是，高度为 t、根结点为 0 的满二叉树中不包含连续 1 的从根结点到叶结点的路径数量，等于高度为 t - 1
、根结点为 0 的满二叉树中的路径数量与高度为 t - 2，根结点为 0 的满二叉树中的路径数量之和。
 */
var findIntegers = function (n) {
    //创建一个10^9次方+1长度的二进制表示数组
    const dp = new Array(31).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i < 31; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    let pre = 0, res = 0;
    for (let i = 29; i >= 0; i--) {
        let val = 1 << i;
       //定位到数字n
        if ((n & val) !== 0) {
            res += dp[i + 1];
            if (pre === 1) {
                break;
            }
            pre = 1
        } else {
            pre = 0;
        }
        if (i === 0) {
            res++;
        }
    }
    return res
}

console.log(findIntegers(15))