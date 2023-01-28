/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length===1 || numRows===1) {
        return s;
    }
    let res = "";
    
    let index = 0;
    while(index<numRows) {
        let index_tmp = index;
        let check = 0;
        while(index_tmp<s.length) {
            if(index===0 || index===numRows-1) {
                res += s[index_tmp];
                index_tmp += 2*(numRows-1);
            }else {
                if(check===0) {
                    res += s[index_tmp];
                    index_tmp = index_tmp+2*(numRows-1)-2*index;
                    check = 1;
                }else if(check===1){
                    res += s[index_tmp];
                    index_tmp += 2*index;
                    check = 0;
                }
            }
        }
        index += 1;
    }
    return res;
};
// @lc code=end

