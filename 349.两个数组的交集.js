/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let _2 = ","+nums2.join(",")+",";
    let res = [];
    nums1.forEach(item=>{
        if(_2.includes(","+String(item)+",")) {
            res.push(item);
        }
    });
    return [...new Set(res)];
};
// @lc code=end

