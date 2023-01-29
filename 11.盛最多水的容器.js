/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let max = Math.min(height[i],height[j])*(j-i);
    
    while(i<j) {
        let tmp;
        if(height[i]<=height[j]) {
            tmp = height[i]*(j-i);
            max = tmp>max?tmp:max;
            i ++;
        }else {
            tmp = height[j]*(j-i);
            max = tmp>max?tmp:max;
            j --;
        }
    }
    return max;
};
// @lc code=end

