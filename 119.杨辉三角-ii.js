/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function factorial(n) {
    //报错超出最大回调栈尺寸
    // if(n===1) {
    //     return 1;
    // }else {
    //     return n*factorial(n-1);
    // }
    let i = 1;
    let res = 1;
    while(i<=n) {
        res *= i;
        i += 1;
    }
    return res;
}
function combination(n,k) {
    return factorial(n)/(factorial(k)*factorial(n-k));
}
var getRow = function(rowIndex) {
    if(rowIndex===0) {
        return [1];
    }else if(rowIndex===1) {
        return [1,1];
    }

    let res = [];
    if((rowIndex+1)%2==0) {
        let index = (rowIndex-1)/2;
        while(index>=0) {
            res.unshift(combination(rowIndex,index));
            res.push(combination(rowIndex,index));
            index -= 1;
        }
    }else {
        res.push(combination(rowIndex,rowIndex/2));

        let index = (rowIndex-2)/2;
        while(index>=0) {
            res.unshift(combination(rowIndex,index));
            res.push(combination(rowIndex,index));
            index -= 1;
        }
    }
    return res;
};
// @lc code=end

