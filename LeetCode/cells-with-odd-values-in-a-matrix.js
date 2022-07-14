/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
    const arr = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    for(let [row,col] of indices){
        for(let i=0;i<n;i++){
            arr[row][i]++;
        }
        for(let i=0;i<m;i++){
            arr[i][col]++;
        }
    }
    let cnt=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]%2==1)cnt++;
        }
    }
    return cnt;
    /* 标记学习
     const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for (const index of indices) {
        rows[index[0]]++;
        cols[index[1]]++;
    }
    let oddx = 0, oddy = 0;
    for (let i = 0; i < m; i++) {
        if ((rows[i] & 1) !== 0) {
            oddx++;
        }
    }
    for (let i = 0; i < n; i++) {
        if ((cols[i] & 1) !== 0) {
            oddy++;
        }
    }
    return oddx * (n - oddy) + (m - oddx) * oddy;
*/
};