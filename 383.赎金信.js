/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length<ransomNote) {
        return false;
    }
    else if(magazine.length===ransomNote.length) {
        return [...ransomNote].sort().join("")===[...magazine].sort().join("");
    }

    let m = [];
    [...magazine].forEach(item=>{
        if(m[item]===undefined) {
            m[item] = 1;
        }else {
            m[item] += 1;
        }
    });
    let i = 0;
    let r_ = [...ransomNote];
    while(i<r_.length) {
        if(m[r_[i]]===undefined || m[r_[i]]<=0) {
            return false;
        }else {
            m[r_[i]] -= 1;
        }
        i ++ ;
    }
    return true;
};
// @lc code=end

