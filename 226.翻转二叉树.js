/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    change(root);
    return root;
};
function change(node) {
  if (node === null) {
    return;
  } else {
    let right = node.right;
    node.right = node.left;
    node.left = right;

    change(node.left);
    change(node.right);
  }
}
// @lc code=end
