/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
    let arr = [];
    transactions.forEach((item) => {
        arr.push(item.split(','))
    });
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][2] > 1000) {
            ans.push(transactions[i]);
            continue;
        }
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                continue;
            }
            console.log(1)
            if (arr[i][0] == arr[j][0] && arr[i][3] !== arr[j][3] && Math.abs(arr[i][1] - arr[j][1]) <= 60) {
                ans.push(transactions[i]);
                break;
            }
        }
    }

    return ans;
};

console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"]))