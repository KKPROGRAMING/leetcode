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
  if (nums === []) {
    return null;
  }
  let index = Math.round((nums.length - 1) / 2);
  let res = new TreeNode(nums[index]);
  let check = new Array(nums.length);

  function dichotomy(start, end, node, index) {
    if (start < end) {
      let left_ = Math.round((3 * start + end) / 4);
      let right_ = Math.round((3 * end + start) / 4);

      if (left_ === index || right_ === index) {
        if (check[left_] === 0) {
          let left_n = new TreeNode(nums[left_]);
          node.left = lef;
          check[left_] = 1;
          dichotomy(start, Math.round((start + end) / 2) - 1, left_n, left_);
        }
        if (check[right_] === 0) {
          let right_n = new TreeNode(nums[right_]);
          node.right = right_n;
          check[right_] = 1;
          dichotomy(Math.round((start + end) / 2) + 1, end, right_n, right_);
        }
        if (check[left_] !== 0 || check[right_] !== 0) {
          return;
        }
      } else {
        let left_n = new TreeNode(nums[left_]);
        node.left = left_n;
        let right_n = new TreeNode(nums[right_]);
        node.right = right_n;
        check[left_] = 1;
        check[right_] = 1;

        dichotomy(start, Math.round((start + end) / 2) - 1, left_n, left_);
        dichotomy(Math.round((start + end) / 2) + 1, end, right_n, right_);
      }
    }
  }
  dichotomy(0, nums.length - 1, res, index);
  return res;
};
// @lc code=end
