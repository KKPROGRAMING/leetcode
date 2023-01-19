/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length===0) {
        return [];
    }

    let res = [];

    let index = 1;
    let rear = nums[0];
    let str = ""+nums[0];
    while(index<nums.length) {
        if(nums[index]!==rear+1) {
            str = str===rear.toString()?str:str.concat("->"+rear);
            res.push(str);

            str = ""+nums[index];
            
        }else {
            if(index===nums.length-1) {
                str = str.concat("->"+nums[index]);
            }
        }
            rear = nums[index];
            index += 1;
        
    }

    res.push(str);

    return res;
};
// @lc code=end

