/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    //将数组索引作为nums的值，遍历nums每次值出现就加1，找到所需出现的次数即可。
    const n = nums.length;
    const arr = new Array(n + 1).fill(0), ans = [];
    for (let num of nums) {
        if (arr[num] === 1) { ans.push(num) }
        else arr[num]++;
    }
    return ans;
};
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))