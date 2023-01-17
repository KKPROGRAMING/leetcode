/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    //26进制
    let res = "";
    let tmp = columnNumber;
    let num = 26;
    while(tmp>0) {
        let divisor = Math.floor(tmp/num);
        let code = (tmp-divisor*num)/(num/26)===0?26:(tmp-divisor*num)/(num/26);
        //console.log(`divisor:${divisor};code:${code}`);
        res = String.fromCharCode(64+code)+res;
        tmp = tmp - code*(num/26);
        num *= 26;
    }
    return res;

};
// @lc code=end

