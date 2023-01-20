/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    while(index<nums.length) {
        if(nums[index]===0) {
            let index_ = index;
            while(index_<nums.length) {
                if(nums[index_]!==0) {
                    let tmp = nums[index];
                    nums[index] = nums[index_];
                    nums[index_] = tmp;
                    break;
                }
                index_ += 1;
            }
        }
        index += 1;
    }
};
// @lc code=end

