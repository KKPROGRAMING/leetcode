/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tmp = [...s];
  let index = 0;
  while (tmp.length > 0 && index < t.length) {
    if (t[index] === tmp[0]) {
      tmp.shift();
    }
    index++;
  }
  return tmp.length === 0;
};
// @lc code=end
