/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let dictionary = [];
    let index = 0;
    while(index<nums.length) {
        if(dictionary[nums[index].toString()]===undefined) {
            dictionary[nums[index].toString()] = index;
            //console.log(`dictionary[${nums[index].toString()}] = ${index}`);
        }else {
            if(Math.abs(index-dictionary[nums[index].toString()])<=k) {
                //console.log("found!");
                return true;
            }else {
                dictionary[nums[index].toString()] = index;
            }
        }
        index += 1;
    }
    return false;
};
// @lc code=end



