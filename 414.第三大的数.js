/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMax = -Math.pow(2,31)-1;
    let secondMax = -Math.pow(2,31)-2;
    let thirdMax = -Math.pow(2,31)-3;
    nums.forEach(item=>{
        if(item>firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = item;
        }
        if(item>secondMax && item<firstMax) {
            thirdMax = secondMax;
            secondMax = item;
        }
        if(item>thirdMax && item<secondMax) {
            thirdMax = item;
        }
    });
    //console.log(firstMax,secondMax,thirdMax);
    return thirdMax>=-Math.pow(2,31)?thirdMax:firstMax;
};
//thirdMax([1,-2147483648,2]);
// @lc code=end


