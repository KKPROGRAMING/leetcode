/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res;
    if(digits.length===1){
        res = [digits[0]];
    }else {
        res = new Array(...digits);
    }
    /* 
    *  这里有一个易错点！
    *  对于只有一个Number类型元素的数组，使用三个点（扩展运算符）进行解构，
    *  再使用new Array()构造新数组，得到的结果是
    *  [ <n empty items> ]
    *  这里的n指的是单个元素的值，而不是预期中的 [n]。
    */
    let index = res.length-1;
    let carry = 0;
    while(index>=0){
        if(index==res.length-1){
            res[index] += 1;
        }
        res[index] += carry;

        if(res[index]<10){
            return res;
        }else {
            res[index] = 0;
            carry = 1;
            index -= 1;
        }
    }

    if(res[0]===0 && carry===1){
        res.unshift(1);
        return res;
    }
};
// @lc code=end






