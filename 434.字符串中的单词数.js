/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let tmp = s.split(" ");
    let res = 0;
    tmp.forEach(item=>{
        if(item!=="") {
            res ++ ;
        }
    });
    return res;
};

console.log(countSegments(", , , ,        a, eaefa"));
// @lc code=end

