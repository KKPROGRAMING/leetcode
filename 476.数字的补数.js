/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let rev = [...num.toString(2)];
    rev.forEach((item,index)=>{rev[index]=item==='1'?'0':'1'});
    return parseInt(rev.join(""),2);
};
// @lc code=end

