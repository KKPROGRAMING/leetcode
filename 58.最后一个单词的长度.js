/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strs = s.split(" ");
    let index = strs.length-1;
    while(index>0){
        if(strs[index].length!==0){
            return strs[index].length;
        }
        index -= 1;
    }
    return strs[index].length;
    // return strs[strs.length-1].length;
};
// @lc code=end

