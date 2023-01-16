/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = [];
    [...s].forEach((item,index)=>{
        let code = s.charCodeAt(index);
        if((code>=65 && code<=90)||(code>=97 && code<=122) ) {
            res.push(item.toLowerCase());
        }
        if(code>=48 && code<=57) {
            res.push(item);
        }
    });
    return res.join("")===res.reverse().join("");
};
// @lc code=end



