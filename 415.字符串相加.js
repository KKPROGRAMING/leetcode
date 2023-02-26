/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let n1 = [...num1].reverse();
    let n2 = [...num2].reverse();
    let res = [];
    let carry = 0;

    let index = 0;
    while(index<n1.length || index<n2.length) {
        let n1_ = index>=n1.length?0:Number(n1[index]);
        let n2_ = index>=n2.length?0:Number(n2[index]);
        let tmp = n1_+n2_+carry;

        if(tmp>=10) {
            carry = 1;
            res.push(String(tmp-10));
        }else {
            carry = 0;
            res.push(String(tmp));
        }

        index ++;
    }
    if(carry===1) {
        res.push("1");
    }
    return res.reverse().join("");
};
//console.log(addStrings("1","9"));
// @lc code=end

