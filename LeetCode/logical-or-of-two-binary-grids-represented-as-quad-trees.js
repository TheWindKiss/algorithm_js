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
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
    //分治法，通过递归按情况分类。
    //1.tree1的结点为叶节点 2.tree2的结点为叶节点 3.都不是叶节点，需要对两者的四节点进行判断
    if (quadTree1.isLeaf) {
        if (quadTree1.val) {
            return new Node(true, true);
        }
        return new Node(quadTree2.val, quadTree2.isLeaf, quadTree2.topLeft, quadTree2.topRight, quadTree2.bottomLeft, quadTree2.bottomRight);
    }
    if (quadTree2.isLeaf) {
        if (quadTree2.val) {
            return new Node(true, true);
        }
        return new Node(quadTree1.val, quadTree1.isLeaf, quadTree1.topLeft, quadTree1.topRight, quadTree1.bottomLeft, quadTree1.bottomRight);
    }
    const N1 = intersect(quadTree1.topLeft, quadTree2.topLeft);
    const N2 = intersect(quadTree1.topRight, quadTree2.topRight);
    const N3 = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
    const N4 = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
    if (N1.isLeaf && N2.isLeaf && N3.isLeaf && N4.isLeaf && N1.val == N2.val && N1.val == N3.val && N1.val == N4.val) {
        return new Node(N1.val, true);
    }
    return new Node(false, false, N1, N2, N3, N4);
}