/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* var findMedianSortedArrays = function (nums1, nums2) {
    const nums3 = nums1.concat(nums2).sort(
        (a,b)=>{
            return a-b
        }
    )
    console.log(nums3)
    if (nums3.length % 2 == 0) {
        console.log(nums3[nums3.length >>1 ])
        console.log(nums3[(nums3.length >>1)  - 1])
        return (nums3[nums3.length >>1 ] + nums3[(nums3.length >>1 ) - 1]) /2
    } else {

        return nums3[(nums3.length - 1) >> 1]
    }


};
 */


var findMedianSortedArrays = function (nums1, nums2) {

    const m = nums1.length;
    const n = nums2.length;
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }
    // 分割线左边的所有元素需要满足的个数 m + (n - m + 1) / 2;
    // 两个数组长度之和为偶数时，当在长度之和上+1时，由于整除是向下取整，所以不会改变结果
    // 两个数组长度之和为奇数时，按照分割线的左边比右边多一个元素的要求，此时在长度之和上+1，就会被2整除，会在原来的数
    //的基础上+1，于是多出来的那个1就是左边比右边多出来的一个元素
    const totalLeft = Math.floor((m + n + 1) / 2);
    // 在 nums1 的区间 [0, leftLength] 里查找恰当的分割线，
    // 使得 nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]
    let left = 0;
    let right = m;
    while (left < right) {
        // 二分查找，此处为取第一个数组中左右指针下标的中位数，决定起始位置
        // 此处+1首先是为了不出现死循环，即left永远小于right的情况
        // left和right最小差距是1，此时下面的计算结果如果不加1会出现i一直=left的情况，而+1之后i才会=right
        // 于是在left=i的时候可以破坏循环条件，其次下标+1还会保证下标不会越界，因为+1之后向上取整，保证了
        // i不会取到0值，即i-1不会小于0
        // 此时i也代表着在一个数组中左边的元素的个数
        let i = left + Math.floor((right - left + 1) / 2);
        let j = totalLeft - i;
        // 此处用了nums1[i - 1] <= nums2[j]的取反，当第一个数组中分割线的左边的值大于第二个数组中分割线的右边的值
        // 说明又指针应该左移，即-1
        if (nums1[i - 1] > nums2[j]) {
            // 下一轮搜索的区间 [left, i - 1]
            right = i - 1;
        } else {
            // 下一轮搜索的区间 [i, right]
            left = i;
        }
    }

    let i = left;
    let j = totalLeft - i;
    const nums1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
    const nums1RightMin = i === m ? Number.MAX_VALUE : nums1[i];
    const nums2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
    const nums2RightMin = j === n ? Number.MAX_VALUE : nums2[j];
    if (((m + n) % 2) === 1) {
        return Math.max(nums2LeftMax, nums1LeftMax);
    } else {

        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2
    }
}

console.log(findMedianSortedArrays([3], [-2, -1]))
