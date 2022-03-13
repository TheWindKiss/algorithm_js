/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let n = nums.length;
    if (n == 0) {
        return [-1, -1];
    }
    let left = 0;
    let right = n - 1;
    let index = [-1, -1];
    while (left <= right) {
        if ((nums[left] == target) || (nums[right] == target)) {
            if (nums[left] == target) {
                index[0] = left;
                while (right >= left) {
                    if (nums[right] == target) {
                        index[1] = right;
                        return index;
                    }
                    right--
                }
            } else {
                index[1] = right;
                while (left <= right) {
                    if (nums[left] == target) {
                        index[0] = left;
                        return index;
                    }
                    left++;
                }
            }

        }
        left++;
        right--;
    }
    return index
};


var searchRange2 = function (nums, target) {
    let ans = [-1, -1]
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    if (n == 0) {
        return ans;
    }
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] >= target) right = mid;
        else left = mid + 1;
    }
    if (nums[left] != target) return ans;
    ans[0] = left;
    right = n-1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= target) left = mid + 1;
        else right = mid;
    }
    ans[1] = right - 1;
   if(nums[right]==target){
       ans[1] = right
   }
    return ans;
}

console.log(searchRange2([1,1], 1))