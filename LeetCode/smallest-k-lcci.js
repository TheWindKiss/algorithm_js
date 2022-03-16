/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
    quickSort(arr, 0, arr.length - 1, k)

    return arr.slice(0, k)
};


function quickSort(arr, p, r, k) {
    if (p >= r) {
        return
    }
    const pos = randomPartition(arr, p, r);
    const num = pos - p + 1;
    if (k === num) {
        return;
    } else if (k < num) {
        quickSort(arr, p, pos - 1, k);
    } else {
        quickSort(arr, pos + 1, r, k - num);
    }
}

function randomPartition(arr, p, r) {
    const i = parseInt(Math.random(r - p + 1)) + p;
    swap(arr, r, i);
    return partition(arr, p, r)
}

function partition(arr, p, r) {
    let x = arr[r];
    let i = p - 1;

    for (let j = p; j < r; j++) {
        if (arr[j] <= x) {
            i = i + 1
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, r)
    return i + 1
}
function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
}

console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4))