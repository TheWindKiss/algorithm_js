/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    //模拟整个过程，发现其实每次循环时候的变量为队列长度和起始位置，所以只要有一个偏移量来表示起始位置就能得到一个n的公式。
    //公式f(n,k)=(f(n-1,k)+k)%n。已知f(1,k)=0，可以逆向推出f(n);
    let ans = 0;
    for (let i = 2; i <= n; i++) {
        //由于k可以是当前长度的好多倍所以需要整除i
        ans = (ans + k) % i;
    }
    return ans + 1;
};
console.log(findTheWinner(6, 5))