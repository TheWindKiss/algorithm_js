/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    /*  
    //直接想法，双循环查找
    const n = list1.length, m = list2.length;
     let sumOfIndex = Number.MAX_VALUE;
     let ans = [];
     for (let i = 0; i < n; i++) {
         for (let j = 0; j < m; j++) {
             if (list1[i] === list2[j]) {
                 let sum = i + j;
                 if (sum < sumOfIndex) {
                     ans = [];
                     ans.push(list1[i]);
                     sumOfIndex = i + j;
                 } else if (sum == sumOfIndex) {
                     ans.push(list1[i]);
                 }
             }
         }
     }
     return ans; */

    
    //使用map进行查找优化，sumOfIndex最大不会大于两数组长度之和
    const map = new Map();
    const n = list1.length, m = list2.length;
    for (let i = 0; i < n; i++) {
        map.set(list1[i], i);
    }
    let ans = [], sumOfIndex = n + m;
    for (let i = 0; i < m; i++) {
        if (map.has(list2[i])) {
            let sum = map.get(list2[i]) + i;
            if (sum < sumOfIndex) {
                sumOfIndex = sum;
                ans = [];
                ans.push(list2[i]);
            } else if (sum == sumOfIndex) {
                ans.push(list2[i]);
            }
        }
    }
    return ans;
};
console.log(findRestaurant(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
))