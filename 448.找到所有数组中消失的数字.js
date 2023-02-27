/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = Array(nums.length).fill(0);
  res.forEach((_, index) => {
    res[index] = index + 1;
  });
  nums.forEach((item) => {
    res[item - 1] = 0;
  });
  for (let i = 0; i < res.length; i++) {
    if (res[i] === 0) {
      res.splice(i, 1);
      i--;
    }
  }
  return res;
};

// @lc code=end
