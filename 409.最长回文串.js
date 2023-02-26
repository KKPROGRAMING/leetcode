/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let res = 0;
    let store = "";
    let cnt = [];
    let ifOddStart = false;

    [...s].forEach(item=>{
        if(!store.includes(item)) {
            store += item;
            cnt[store.indexOf(item)] = 0;
        }
        cnt[store.indexOf(item)] += 1;
    });
    //console.log(cnt);
    cnt.forEach(item=>{
        if(item%2===0) {
            res += item;
        }else {
            if(!ifOddStart) {
                res += item;
                ifOddStart = true;
            }else {
                res += (item-1);
            }
        }
    });
    return res;
};

//console.log(longestPalindrome("aaaaadrccc"));
// @lc code=end

