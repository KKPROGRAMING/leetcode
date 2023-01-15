/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    let row = 1;
    while(row<=numRows) {
        let rowRes = [1];
        if(row!==1) {
            res[res.length-1].forEach((item,index)=>{
                if(index!==res[res.length-1].length-1) {
                    rowRes.push(item+res[res.length-1][index+1]);
                }else {
                    rowRes.push(1);
                }
            })
        }
        res.push(rowRes);
        row += 1;
    }
    return res;
};
// @lc code=end

