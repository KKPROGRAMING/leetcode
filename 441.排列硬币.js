/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor(Math.sqrt(2.0*n+0.25)-0.5);
};
//console.log(arrangeCoins(8));
// @lc code=end

