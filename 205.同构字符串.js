/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let dictionary = [];
    let t_ = [...t];
    let res = true ;

    [...s].forEach((item,index)=>{
        if(dictionary[item]===undefined) {
            if(t.slice(0,index).includes(t_[index])) {
                res = false;
            }else {
                dictionary[item] = t_[index];
            }
        }else {
            if(t_[index]!==dictionary[item]) {
                res = false;
            }
        }
    });
    return res;
};
// @lc code=end

// let s = "badc";
// let r = "baba";
// console.log("result:"+isIsomorphic(s,r));

