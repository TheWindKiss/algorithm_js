/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
    let rounds = [];
    for (let i = k; i > 0; i--) {
        if (i == k) {
            rounds = relation.filter((item) => item[0] == 0)
        } else {
            const next = [];
            for (const round of rounds) {
                next.push(...relation.filter((item) => item[0] == round[1]));
            }
            rounds = next;
        }
    }

    return rounds.filter((item) => item[1] == n - 1).length;
};

console.log(numWays(n = 5, relation = [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], k = 3))