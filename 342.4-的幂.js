/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let str = [...n.toString(4)];
    if(str[0]==="1") {
        str.shift();
        if(str.includes("1") || str.includes("2") || str.includes("3")) {
            return false;
        }
    }else {
        return false;
    }

    return true;
};
// @lc code=end

