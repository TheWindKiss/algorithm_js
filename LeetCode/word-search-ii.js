/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let tire = new Trie();
    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let ans = new Set();
    const dfs = function (board, now, i1, j1, ans) {
        if (!now.children.has(board[i1][j1])) {
            return
        }
        //查询对应单词字符所在的字典树
        let ch = board[i1][j1];
        now = now.children.get(ch);
        //如果不为空，则添加到ans中
        if (now.word.length !== 0) {
            ans.add(now.word)
        }
        //将已查询的字符临时变为#
        board[i1][j1] = '#';
        for (dir of dirs) {
            //递归，向四个方向查询是否有匹配的字符
            let i2 = i1 + dir[0], j2 = j1 + dir[1];
            if (i2 >= 0 && i2 < board.length && j2 >= 0 && j2 < board[0].length) {
                dfs(board, now, i2, j2, ans)
            }
        }
        //恢复字符
        board[i1][j1] = ch;
    }
    for (const word of words) {
        tire.insert(word)
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board,tire,i,j,ans)
        }
    }
    return Array.from(ans)
};

class Trie {
    constructor() {
        this.word = '';
        this.children = new Map();
        this.isWord;
    }
    insert(word) {
        let cur = this;
        for (let i = 0; i < word.length; i++) {
            let ch = word[i];
            if (!cur.children.has(ch)) {
                cur.children.set(ch, new Trie)
            }
            cur = cur.children.get(ch)
        }
        cur.word = word;
    }
}

console.log(findWords([["a","b"],["c","d"]],["abcb"]))