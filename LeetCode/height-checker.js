/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    //模拟题意，一道没啥意思的题目
    const expected=heights.slice(0),n=heights.length;
    expected.sort((a,b)=>a-b);
    let ans=0;
    for(let i=0;i<n;i++){
        if(expected[i]!==heights[i])ans++;
    }
    return ans;
};