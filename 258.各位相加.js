/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(1){
        num = getSum(num);
        if(num<10) {
            return num;
        }
    }
};
function getSum(num) {
    let str = num.toString(10);
    let res = 0;
    [...str].forEach(item=>{
        res += Number(item);
    });
    return res;
}
// @lc code=end

