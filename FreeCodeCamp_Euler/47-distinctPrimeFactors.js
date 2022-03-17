const NUMFACTORS = new Array(1e6).fill(0);
(function initFactors(num) {
    //获取构造数字的质数数字,
    for (let i = 2; i < num; i++)
        if (NUMFACTORS[i] === 0)
            //NUMFACTORS[i]为0时，i为质数，下面的循环为i的倍数，数组值加1
            for (let j = i; j < num; j += i)
                NUMFACTORS[j]++;

})(1e6);

function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
    let cnt = 0;
    let curr = 10;
    while (targetConsecutive > cnt) {
        if (NUMFACTORS[curr] === targetNumPrimes) cnt++
        else cnt = 0;
        curr++;
    }
    return curr - cnt;
}
console.log(distinctPrimeFactors(2, 2))