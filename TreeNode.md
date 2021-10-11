### 二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

````javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  } else {
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
````

### 验证二叉搜索树

给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

````javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let nodes = []
  let inorder = -Infinity
  while (nodes.length || root !== null) {
    while (root !== null) {
      nodes.push(root)
      root = root.left
    }
    root = nodes.pop()
    if (root.val <= inorder) {
      return false
    }
    inorder = root.val
    root = root.right
  }
  return true
};
````

### 对称二叉树

给定一个二叉树，检查它是否是镜像对称的。

**进阶：**

你可以运用递归和迭代两种方法解决这个问题吗？

````javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return check(root, root)
};
function check(l, r) {
  if (!l && !r) { return true }
  if (!l || !r) { return false }
  return l.val == r.val && check(l.left, r.right) && check(l.right, r.left) 
}
````

### 二叉树的层序遍历

给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。 （即逐层地，从左到右访问所有节点）。

````javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  if (!root) { return res }

  let levelNodes = [root]
  while (!!levelNodes.length) {
    res.push([])
    const levelSize = levelNodes.length
    for (let i = 0; i < levelSize; i++) {
      const node = levelNodes.shift()
      res[res.length - 1].push(node.val)
      if (node.left) { levelNodes.push(node.left) }
      if (node.right) { levelNodes.push(node.right) }
    }
  }
  return res
};
````

