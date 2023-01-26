/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let s = 1;
    let e = n;
    let m = (s+e)%2===0?(s+e)/2:(s+e-1)/2;
    while(guess(m)!==0) {
        if(guess(m)===-1) {
            e = m;
            m = (s+e)%2===0?(s+e)/2:(s+e-1)/2;
        }else if(guess(m)===1){
            s = m;
            m = (s+e)%2===0?(s+e)/2:(s+e+1)/2;
        }
    }
    return m;
};
// @lc code=end

