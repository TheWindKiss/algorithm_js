/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    //题目难点在于读题
    //思路：用递归的思路，构造树，首先是最大的，然后四等分，判断四个部分的子树。
    //如果对应部分中的值唯一则该子树为叶节点，直接返回叶节点构造即可，否则继续向下。
    return dfs(grid, 0, 0, grid.length, grid.length);
};
const dfs = (grid, x0, y0, x1, y1) => {
    let same = true;
    for (let i = x0; i < x1; ++i) {
        for (let j = y0; j < y1; ++j) {
            if (grid[i][j] !== grid[x0][y0]) {
                same = false;
                break;
            }
        }
        if (!same) {
            break;
        }
    }

    if (same) {
        return new Node(grid[x0][y0] === 1, true);
    }

    const ret = new Node(
        true,
        false,
        dfs(grid, x0, y0, Math.floor((x0 + x1) / 2), Math.floor((y0 + y1) / 2)),
        dfs(grid, x0, Math.floor((y0 + y1) / 2), Math.floor((x0 + x1) / 2), y1),
        dfs(grid, Math.floor((x0 + x1) / 2), y0, x1, Math.floor((y0 + y1) / 2)),
        dfs(grid, Math.floor((x0 + x1) / 2), Math.floor((y0 + y1) / 2), x1, y1)
    );
    return ret;
}