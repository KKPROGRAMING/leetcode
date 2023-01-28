/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);
  let mark = x < 0 ? "-" : "";
  let res = Number(mark + [...Math.abs(x).toString()].reverse().join(""));
  return res > max || res < min ? 0 : res;
};
// @lc code=end
