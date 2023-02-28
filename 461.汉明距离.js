/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let and = x^y;
    //console.log(and.toString(2));
    let cnt = 0;
    while(and!=0) {
        and = and&(and-1);
        cnt ++ ;
    }
    return cnt;
};
//console.log(hammingDistance(1,4))

// @lc code=end

