/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //中心扩散法
    let index = 0;
    let start=0,end=0;
    while(index<s.length) {
        let [left1,right1] = handler(s,index,index+1);
        let [left2,right2] = handler(s,index,index);
        if(right1-left1>end-start) {
            end = right1;
            start = left1;
        }
        if(right2-left2>end-start) {
            end = right2;
            start = left2;
        }
        index ++;
    }
    return s.slice(start,end+1);
};

function handler(s,left,right) {
    while(left>=0 && right<s.length && s[left]===s[right]) {
        left --;
        right ++;
    }
    return [left+1,right-1];
}
// @lc code=end






