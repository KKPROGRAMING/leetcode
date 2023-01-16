/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let index = 0;
    if(nums.length===1) {
        return nums[0];
    }
    while(index<nums.length) {
        if(nums[index]!==nums[index+1]) {
            return nums[index];
        }
        index += 2;
    }
    return 0;
};
// @lc code=end

