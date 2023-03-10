/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length-1;
    while(i<j) {
        let change = s[j];
        s[j] = s[i];
        s[i] = change;

        i ++;
        j --;
    }
};
// @lc code=end

