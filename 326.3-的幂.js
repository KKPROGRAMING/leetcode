/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let str = [...n.toString(3)];

    if(str[0]==="1") {
        str.shift();
        if(str.join("").includes("1")||str.join("").includes("2")) {
            return false;
        }
    }else {
        return false;
    }

    return true;
};
// @lc code=end



