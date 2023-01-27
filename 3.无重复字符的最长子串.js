/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let count = [0];
    
    let index = 0;
    while(index<s.length) {
        let index_ = index;
        let tmp = "";
        while(index_<s.length) {
            if(!tmp.includes(s[index_])) {
                tmp += s[index_];
            }else {
                break;
            }
            index_ += 1;
        }
        count.push(tmp.length);
        index += 1;
    }
    return Math.max(...count);
};
// @lc code=end

console.log(" "[0]);

