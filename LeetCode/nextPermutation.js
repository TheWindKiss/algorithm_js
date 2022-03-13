/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* var nextPermutation = function (nums) {
    let len = nums.length;
    let l = 0;
    let flag = true;
    for (let i = len - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            {
                let minIndex = i;
                for (let j = i; j < len; j++) {
                    if (nums[j] < nums[minIndex] && nums[j] > nums[i - 1]) {
                        minIndex = j
                    }
                }
                l = i;
                nums = swap(nums, i - 1, minIndex)
                flag = !flag;
                break;
            }

        }
    }
    if (flag) {
        nums.sort((a, b) => {
            return a - b;
        })
        return nums
    }
    let arrL = nums.slice(0, l);
    let arrR = nums.slice(l, len);
    arrR.sort((a, b) => {
        return a - b
    })
    let ans = arrL.concat(arrR)
    return ans;
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return nums
} */

var nextPermutation = function (nums) {
    let n = nums.length;
    let k = n - 1;
    //从后向前找到数组中第一个开始降序的位置，标记。
    while (k - 1 >= 0 && nums[k - 1] >= nums[k]) k--;
    console.log(k)
    if (k == 0) {
        //完全是降序排序的，翻转整个数组变成升序排序
        reverse(nums, 0, n - 1);
    } else {
        let u = k;
        //从之前的标记位开始找正向找，因为[k,n-1]这一段是降序排序的，所以找到的最后一个u必然是最小比nums[k - 1]大的值
        while (u + 1 < n && nums[u + 1] > nums[k - 1]) u++;
        //交换位置
        swap(nums, k - 1, u);
        //翻转[k,n-1]这一段（变为升序）
        reverse(nums, k, n - 1);
    }
    return nums;
};

function reverse(nums, a, b) {
    let l = a;
    let r = b;
    while (l < r) {
        nums = swap(nums, l++, r--);
    }

}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return nums
}

console.log(nextPermutation([1,3,6,5,4,3,1]))