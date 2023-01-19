/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let str = [...n.toString(2)];
    return str.shift()==="1" && !str.includes("1");
};
// @lc code=end



