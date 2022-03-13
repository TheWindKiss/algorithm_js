/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    let arr = Array.from(map);
    arr.sort((a, b) => {
        return b[1]-a[1];
    })
    const ans = [];
    for (let i = 0; i < k ; i++) {
        ans.push(arr[i][0])
    }
    return ans;
};

console.log(topKFrequent(nums = [1,1,1,2,2,3], k = 2));