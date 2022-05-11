//序列化：通过前序将树的值拼接为一个字符串，空子树用X表示。
//反序列化：构造一个buildTree函数将前序遍历的子树重新构造出来。
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) return 'X';
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = data.split(',');
    const buildTree = (arr) => {
        const val = arr.shift();
        if (val === 'X') return null;
        const root = new TreeNode(val);
        root.left = buildTree(arr);
        root.right = buildTree(arr);
        return root;
    }
    return buildTree(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */