/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const h = board.length, w = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array(h).fill(false).map((x) => Array(w).fill(false));
    const check = (i, j, k) => {
        if (board[i][j] !== word[k]) {
            return false
        } else if (k == word.length - 1) {
            return true
        }
        visited[i][j] = true;
        let result = false;
        for ([dx, dy] of directions) {
            let x = dx + i;
            let y = dy + j;
            if (x >= 0 && y >= 0 && x < h && y < w) {
                //查看访问数组中的是否已经有存在的
                if (!visited[x][y]) {
                    const flag = check(x, y, k + 1)
                    if (flag) {
                        result = true;
                        break
                    }
                }
            }
        }
        visited[i][j] = false;
        return result
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))