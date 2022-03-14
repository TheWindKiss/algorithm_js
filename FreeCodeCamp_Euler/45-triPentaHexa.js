/* function triPentaHexa(n) {
    //直接暴力查值
    let start = n;
    while(!(isTriangle(start)&&isPentagonal(start)&&isHexagonal(start))){
        start++;
    }
    return start;
}
const isTriangle = (num) => {
    //判断三角形
    let n = (Math.sqrt(8 * num + 1) - 1) / 2;
    return n === Math.floor(n);
}
const isPentagonal = (num) => {
    //判断五角形
    let n = (Math.sqrt(24 * num + 1) + 1) / 6;
    return n === Math.floor(n);
}
const isHexagonal = (num) => {
    //判断六角形
    let n = (Math.sqrt(8 * num + 1) + 1) / 4;
    return n === Math.floor(n);
} */
function triPentaHexa(n) {
    //优化思路，先获取第一个接近六角形的n，然后通过六角形公式获取下一个六角形，增加循环的步长减少循环次数。
    //可以继续获取五角形，增加步长。
    let start = getNestHexagonal(n) + 1;
    let ans = start * (2 * start - 1);
    while (!(isTriangle(ans) && isPentagonal(ans))) {
        start++;
        ans = start * (2 * start - 1);
    }
    return ans;
}
const getNestHexagonal = (num) => {
    let n = (Math.sqrt(8 * num + 1) + 1) / 4;
    return Math.floor(n);
}
const isTriangle = (num) => {
    //判断三角形
    let n = (Math.sqrt(8 * num + 1) - 1) / 2;
    return n === Math.floor(n);
}
const isPentagonal = (num) => {
    //判断五角形
    let n = (Math.sqrt(24 * num + 1) + 1) / 6;
    return n === Math.floor(n);
}
console.log(triPentaHexa(40756))