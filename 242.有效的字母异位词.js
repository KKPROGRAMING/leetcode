/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) {
        return false;
    }

    let dictionary = [];
    [...s].forEach(item=>{
        if(dictionary[item]===undefined) {
            dictionary[item] = 1;
        }else {
            dictionary[item] += 1;
        }
    });

    let t_ = [...t];
    t_.forEach(item=>{
        if(dictionary[item]===undefined) {
            dictionary[item] = -1;
        }else {
            dictionary[item] -= 1;
        }
    });
    
    let index = 0;
    while(index<t_.length) {
        if(dictionary[t_[index]]!==0) {
            return false;
        }
        index += 1;
    }

    return true;

};
// @lc code=end


