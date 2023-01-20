/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    let turn = 0;
    while(n>0) {
        n = (n%4)===0?n-1:n-(n%4);
        turn += 1;
    }
    return turn%2!==0;
};
// @lc code=end

