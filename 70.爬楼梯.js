/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    function factorial(a,res){
        if(a>1){
            return factorial(a-1,res*a);
        }else {
            return res;
        }
    }
    function combination(n,k){
        return factorial(n,1)/(factorial(k,1)*factorial(n-k,1));
    }
    let a = n-2;
    let res;
    if(n%2==0) {
        res = 2;
    }else {
        res = 1;
    }
    while(a>0) {
        res += combination((a+n)/2,a);
        a -=2;
    }
    return res;
};
// @lc code=end

