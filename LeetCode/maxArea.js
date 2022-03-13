/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let areaMax = 0;
    while (left <= right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        areaMax = Math.max(area, areaMax);
        if(height[left]<=height[right]){
            left++;
        }else{
            right--;
        }
    }
    return areaMax
};

console.log(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7]
))