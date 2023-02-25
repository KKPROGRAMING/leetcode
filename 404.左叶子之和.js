/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root.left === null && root.right === null) {
    return 0;
  }

  function handler(node, type) {
    if (node === null) {
      return 0;
    }

    if (node.left === null && node.right === null) {
      return type === "left" ? node.val : 0;
    } else {
      return handler(node.left, "left") + handler(node.right, "right");
    }
  }

  return handler(root.left, "left") + handler(root.right, "right");
};
// @lc code=end
