/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    let dictionary = [];
    nums1.forEach(item=>{
        if(dictionary[String(item)]===undefined) {
            dictionary[String(item)] = 1;
        }else {
            dictionary[String(item)] += 1;
        }
    });
    nums2.forEach(item=>{
        if(dictionary[String(item)]!==undefined && dictionary[String(item)]>0) {
            res.push(item);
            dictionary[String(item)] -= 1;
        }
    });
    return res;
};
// @lc code=end

