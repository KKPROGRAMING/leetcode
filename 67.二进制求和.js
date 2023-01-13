/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res;
    let ano;
    if(a.length>b.length){
        res = [...a];
        ano = [...b];
    }else {
        res = [...b];
        ano = [...a];
    }

    let digit = 1;
    let carry = 0;
    let ano_ ;
    
    while(res.length-digit>=0){
        
        ano_ = ano.length-digit>=0?ano[ano.length-digit]:"0";

        if(ano_==="1" && carry===1){
            carry = 1;
        }else if(ano_==="0" && carry===0){
            carry = 0;
        }else {
            if(res[res.length-digit]==="1"){
                carry = 1;
                res.splice(res.length-digit,1,"0");
            }else {
                carry = 0;
                res.splice(res.length-digit,1,"1");
            }
        }
        digit += 1;
    }
    if(carry===1){
        res.unshift("1");
    }
    return res.join("");
};
// @lc code=end