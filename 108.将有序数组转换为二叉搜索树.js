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
  function dichotomy(start, end) {
    if (start === end) {
      return new TreeNode(nums[start], null, null);
    } else {
      if ((end - start) % 2 !== 0) {
        return new TreeNode(
          nums[(start + end - 1) / 2],
          dichotomy(start, (start + end - 3) / 2),
          dichotomy((start + end + 1) / 2, end)
        );
      } else {
        return new TreeNode(
          nums[(start + end) / 2],
          dichotomy(start, (start + end - 2) / 2),
          dichotomy((start + end + 2) / 2, end)
        );
      }
    }
  }
  return dichotomy(0, nums.length - 1);
};
// @lc code=end
