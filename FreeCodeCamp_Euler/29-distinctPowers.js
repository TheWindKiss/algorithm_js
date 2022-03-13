function distinctPowers(n) {
    //如果要剪枝，应该是将平方项拿出来剪枝,在数据量小的时候不划算
    const set = new Set();
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= n; j++) {
            set.add(i ** j);
        }
    }
    return set.size;
}

console.log(distinctPowers(30))