/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function dichotomy(left, right) {
    if (left > right) {
      return null;
    }
    let mid = left + ((right - left) >> 1);
    let node = new TreeNode(nums[mid]);
    node.left = dichotomy(left, mid - 1);
    node.right = dichotomy(mid + 1, right);
    return node;
  }

  return dichotomy(0, nums.length - 1);
};
// @lc code=end
