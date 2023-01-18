/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b);

    let index = 0;
    while(index<nums.length) {
        if(nums[index]===nums[index+1])
            return true;
        
            index += 1;
    }

    return false;
};
// @lc code=end

