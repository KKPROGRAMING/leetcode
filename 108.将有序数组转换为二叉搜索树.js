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
  let root_index =
    (nums.length - 1) % 2 !== 0 ? (nums.length - 2) / 2 : (nums.length - 1) / 2;
  let root = new TreeNode(nums[root_index]);

  function dichotomy(index_s, index_e, index_m, node) {
    if (index_s !== index_e) {
      let left_end = index_m - 1;
      let left_middle =
        (left_end - index_s) % 2 !== 0
          ? (index_s + left_end - 1) / 2
          : (index_s + left_end) / 2;

      let right_start = index_m + 1;
      let right_middle = (index_e - right_start) % 2 !== 0
      ? (right_start + index_e - 1) / 2
      : (right_start + index_e) / 2;

      let node_l = new TreeNode(nums[left_middle]);
      node.left = node_l;
      let node_r = new TreeNode(nums[right_middle]);
      node.right = node_r;

      dichotomy(index_s, left_end, left_middle, node_l);
      dichotomy(right_start, index_e, right_middle, node_r);
    }
  }

  dichotomy(0, nums.length - 1, root_index, root);
  return root;
};
// @lc code=end
