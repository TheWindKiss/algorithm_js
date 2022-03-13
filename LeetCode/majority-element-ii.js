/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    const many = Math.floor(nums.length / 3);
    const ans = []
    const arr = Array.from(map);
    for (const item of arr) {
        if (item[1] > many) {
            ans.push(item[0])
        }
    }
    return ans;
    /*   
    摩尔投票
    let element1 = 0;
        let element2 = 0;
        let vote1 = 0;
        let vote2 = 0;
    
        for (const num of nums) {
            if (vote1 > 0 && num === element1) { //如果该元素为第一个元素，则计数加1
                vote1++;
            } else if (vote2 > 0 && num === element2) { //如果该元素为第二个元素，则计数加1
                vote2++;
            } else if (vote1 === 0) { // 选择第一个元素
                element1 = num;
                vote1++;
            } else if (vote2 === 0) { // 选择第二个元素
                element2 = num;
                vote2++;
            } else { //如果三个元素均不相同，则相互抵消1次
                vote1--;
                vote2--;
            }
        }
    
        let cnt1 = 0;
        let cnt2 = 0;
        for (const num of nums) {
            if (vote1 > 0 && num === element1) {
                cnt1++;
            }
            if (vote2 > 0 && num === element2) {
                cnt2++;
            }
        }
        // 检测元素出现的次数是否满足要求
        const ans = [];
        if (vote1 > 0 && cnt1 > Math.floor(nums.length / 3)) {
            ans.push(element1);
        }
        if (vote2 > 0 && cnt2 > Math.floor(nums.length / 3)) {
            ans.push(element2);
        }
    
        return ans; */
};
console.log(majorityElement([1, 2]))