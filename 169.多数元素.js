/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    //console.log(nums);
    let index = 0 ;
    while(index<nums.length) {
        if(nums[index]===nums[index+Math.ceil(nums.length/2)-1]) {
            return nums[index];
        }
        index += 1;
    }
    return nums[0];
};
// @lc code=end

