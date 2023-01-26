/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 1;
    while(2*i <=num) {
        if(i*i===num) {
            return true;
        }
        if(i*i<num && (i+1)*(i+1)>num) {
            return false
        }
        i ++;
    }
    return num===1?true:false;
};
// @lc code=end

