/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    const hasher = new StringHasher(s)
    const check = (length) => {
        if (length === 0) return ''
        const visited = new Set();

        for (let i = 1; i + length - 1 <= s.length; i++) {
            const sliceHash = hasher.getHashOfRange(i, i + length - 1)
            if (visited.has(sliceHash)) return s.slice(i - 1, i - 1 + length)
            visited.add(sliceHash)
        }
        return ''
    };
    let res = ''
    let left = 0
    let right = s.length
    while (left <= right) {
        const mid = (left + right) >> 1
        const subString = check(mid)

        if (subString !== '') {
            if (subString.length > res.length) res = subString
            left = mid + 1
        } else right = mid - 1
    }

    return res

}
class StringHasher {
    static BASE = 131n
    static MOD = BigInt(2 ** 64)
    static setBASE(base) {
        StringHasher.BASE = BigInt(base)
    }

    static setMOD(mod) {
        StringHasher.MOD = BigInt(mod)
    }

    constructor(input) {
        this.inputString = input
        this.prefix = new BigUint64Array(input.length + 1)
        this.base = new BigUint64Array(input.length + 1)
        this.prefix[0] = 0n
        this.base[0] = 1n
        for (let i = 1; i <= this.inputString.length; i++) {
            this.prefix[i] = this.prefix[i - 1] * StringHasher.BASE + BigInt(input.charCodeAt(i - 1))
            this.base[i] = this.base[i - 1] * StringHasher.BASE
        }
    }
    getHashOfRange(left, right) {
      //  this.checkRange(left, right)
        const mod = StringHasher.MOD
        const upper = this.prefix[right]
        const lower = this.prefix[left - 1] * this.base[right - (left - 1)]
        return (upper - (lower % mod) + mod) % mod
    }
   /*  checkRange(left, right) {
        if (right < left) {
            throw new RangeError('right 不能小于 left')
        }

        if (left < 1) {
            throw new RangeError('left 不能小于1')
        }

        if (right < 1) {
            throw new RangeError('right 不能小于1')
        }

        if (left > this.inputString.length) {
            throw new RangeError('left 不能 超出边界')
        }

        if (right > this.inputString.length) {
            throw new RangeError('right 不能 超出边界')
        }
    } */
}

console.log(longestDupSubstring("banana"))