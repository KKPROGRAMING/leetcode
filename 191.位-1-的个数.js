/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2);
    
    let res = 0;
    [...str].forEach(item=>{
        if(item==="1") {
            res += 1;
        }
    });

    return res;
};
// @lc code=end

