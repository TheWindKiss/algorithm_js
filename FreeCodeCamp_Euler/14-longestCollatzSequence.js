const cache = { '1': 1 };
function longestCollatzSequence(limit) {
    let maxLen = 0, index = 1;
    for (let i = 1; i <= limit; i++) {
        let len = getLength(i);
        if (maxLen < len) {
            index = i;
            maxLen = len;
        }
    }
    return index;
}
const getLength = (num) => {
    if (cache[num]) {
        return cache[num]
    } else {
        let len = num % 2 == 0 ? getLength(num / 2) + 1 : getLength(3 * num + 1) + 1;
        cache[num] = len;
        return len;
    }
}

console.log(longestCollatzSequence(100000))