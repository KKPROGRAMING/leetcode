/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let index = 0;
    let dic = Array(123).fill(0);
    while(index<t.length) {
        if(index===t.length-1) {
            dic[t[index].charCodeAt()] += 1;
        }else {
            dic[s[index].charCodeAt()] -= 1;
            dic[t[index].charCodeAt()] += 1;
        }
        index ++;
    }
    index = 97;
    while(index<123) {
        if(dic[index]===1) {
            return String.fromCharCode(index);
        }
        index ++;
    }
};
// @lc code=end

console.log('a'.charCodeAt());

