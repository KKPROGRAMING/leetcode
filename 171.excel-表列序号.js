/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    let num = 1;
    let index = columnTitle.length-1;
    while(index>=0) {
        res += (columnTitle.charCodeAt(index)-64)*num;
        num *= 26;
        index -= 1;
    }
    return res;
};
// @lc code=end

