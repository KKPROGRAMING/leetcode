/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = (1+nums.length)*nums.length/2;
    nums.forEach(item=>{
        sum -= item;
    });
    return sum;
};
// @lc code=end

