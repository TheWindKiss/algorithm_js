/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const map = new Map();
    const n = s.length;
    const digits = new Array(10).fill(0);
    for (let i = 0; i < n; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    digits[0] = map.get('z') || 0;
    digits[2] = map.get('w') || 0;
    digits[4] = map.get('u') || 0;
    digits[6] = map.get('x') || 0;
    digits[8] = map.get('g') || 0;

    digits[3] = (map.get('h') || 0) - digits[8];
    digits[5] = (map.get('f') || 0) - digits[4];
    digits[7] = (map.get('s') || 0) - digits[6];

    digits[1] = map.get('o') - digits[0] - digits[2] - digits[4];
    digits[9] = map.get('i') - digits[5] - digits[6] - digits[8];

    let ans = '';
    for (let i = 0; i < 10; i++) {
        if (digits[i] > 0) {
            ans += `${i}`.repeat(digits[i]);
        }
    }
    return ans;
};

console.log(originalDigits(s = "nnei"))