/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2);
    if(str.length<32) {
        str = Array(32-str.length).fill(0).join("").concat(str);
    }

    let res = 0;
    let index = 0;
    let num = 1;
    while(index<str.length) {
        res += Number(str[index])*num;
        num *= 2;
        index += 1;
    }
    return res;
};
// @lc code=end

