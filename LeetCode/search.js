/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* var search = function (nums, target) {
    let index = 0;
    let i
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
           
            index = i;
            break;
        }
        if (nums[i] > target) {
            let j = nums.length - 1;
            while (target < nums[j]) j--;
            if (nums[j] == target) {
                index = j;
                break;
            } else {
                return -1;
            }
        }
    }
if(i==nums.length){
    return -1;
}
    return index;
};
 */

var search = function (nums, target) {
    //二分法
    let n = nums.length;
    if (n == 0) {
        return -1;
    }
    if (n == 1) {
        return nums[0] == target ? 0 : -1;
    }
    let l = 0;
    let r = n - 1;
    while (l <= r) {
        let mid = (l + r) >>1;
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[0] <= nums[mid]) {
            //判断是否有序，二分中必有一个部分是有序的
            if (nums[0] <= target && target < nums[mid]) {
                //判断目标是否在这个部分中，不在这个部分就去另一部分中寻找
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            //判断进入这个部分必然是有序的
            if (nums[mid] < target && target <= nums[n - 1]) {
                //判断目标是否在这个部分中
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

var search1 = function (nums, target) {
  return  nums.indexOf(target);

}


console.log(search1([1,3], 1))