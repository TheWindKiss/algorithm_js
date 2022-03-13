/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
/* var findMaximizedCapital = function (k, w, profits, capital) {
    let total = w;

    while (k > 0) {
        let best = 0;
        let index = -1;
        for (let i = 0; i < capital.length; i++) {
            if (capital[i] <= total) {
                if (profits[i]  > best) {
                    best = profits[i] ;
                    index = i;
                }
            }
        }
        if (capital[0] === undefined || index == -1) {
            break
        }
        total += profits[index];
        profits.splice(index, 1);
        capital.splice(index, 1);
        k--;
    }
    return total
}; */
var findMaximizedCapital = function (k, w, profits, capital) {
    let n = profits.length;
    let arr = [];
    let curr = 0
    for (let i = 0; i < n; i++) {
        arr.push([capital[i], profits[i]])
    }

    arr.sort((a, b) => a[0] - b[0]);
    let queue = [];
    while (k > 0) {
        while (curr < n && arr[curr][0] <= w) {
            queue.push(arr[curr][1]);
            curr++
        }
        queue.sort((a, b) => a - b)
        //   console.log(queue)
        if (queue.length !== 0) {
            w += queue.pop()
        } else {
            break;
        }
        k--;
    }
    return w
}


/* function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number{
    const n = profits.length
  const sort: [number, number][] = []
  for (let i = 0; i < n; i++) {
    sort.push([capital[i], profits[i]])
  }
  let j = 0
  sort.sort(([p0], [n0]) => p0 - n0)
  // 从小到大排序
  const queue: number[] = []
  for (let i = 0; i < k; i++) {
    while (j < n && sort[j][0] <= w) {
      const capital = sort[j][1]
      if (!queue.length || capital >= queue[queue.length - 1]) {
        queue.push(capital)
      } else if (capital <= queue[0]) {
        queue.unshift(capital)
      } else {
        let [lo, hi] = [0, queue.length - 1]
        while (lo < hi) {
          const mid = (lo + hi) >> 1
          if (queue[mid] <= capital) lo = mid + 1
          else hi = mid
        }
        queue.splice(lo, 0, capital)
      }
      j++
    }
    if (queue.length) w += queue.pop()!
    else break
  }
  return w
} */


var findMaximizedCapital = function(k, w, profits, capital) {
    let n = profits.length;
     let arr = [];
     let curr = 0
     for (let i = 0; i < n; i++) {
         arr.push([capital[i], profits[i]])
     }
 
     arr.sort((a, b) => a[0] - b[0]);
     let queue = [];
     while (k > 0) {
         while (curr < n && arr[curr][0] <= w) {
            const profit=arr[curr][1]
             if(!queue.length||profit>=queue[queue.length-1]){
                 queue.push(profit)
             }else if(profit<=queue[0]){
                 queue.unshift(profit)
             }else{
                 let [lo,hi]=[0,queue.length-1]
                 while(lo<hi){
                     const mid=(lo+hi)>>1;
                     if(queue[mid]<=profit) lo=mid+1
                     else hi=mid
                 }
                 queue.splice(lo,0,profit)
             }
             curr++
         }
        if(queue.length) w+=queue.pop()
        else break;
         k--;
     }
     return w
 };
console.log(findMaximizedCapital(1, 1, [1, 2, 3], [1, 1, 2]))