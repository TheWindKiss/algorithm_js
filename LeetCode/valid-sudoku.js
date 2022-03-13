/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== '.') {
                //获取
                const index =+c-1;
                console.log(c)
                rows[i][index]++;
                columns[j][index]++;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false;
                }
            }
        }
    }
    return true
};
console.log(isValidSudoku([[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".","9",".",".",".",".",".",".","1"],["8",".",".",".",".",".",".",".","."],[".","9","9","3","5","7",".",".","."],[".",".",".",".",".",".",".","4","."],[".",".",".","8",".",".",".",".","."],[".","1",".",".",".",".","4",".","9"],[".",".",".","5",".","4",".",".","."]]))
