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

  let left = root_index - 1;
  let right = root_index + 1;

  let now_l = root;
  let now_r = root;
  while (1) {
    if(left>=0) {
        now_l.left = new TreeNode(nums[left]);
        now_l = now_l.left;
        left -= 1;
    }
    if(right<=nums.length-1) {
        now_r.right = new TreeNode(nums[right]);
        now_r = now_r.right;
        right += 1;
    }
    if(left<0 && right>nums.length-1) {
        break;
    }
  }

  return root;
};
// @lc code=end
