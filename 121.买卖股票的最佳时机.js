/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    //动态规划
    //学会利用题目提供的条件，比如这个10^4
    let low = Math.pow(10,4);
    let res = 0;
    prices.forEach(item=>{
        if(item-low>res) {
            res = item-low;
        }
        if(item<low) {
            low = item;
        }
    });
    return res;
};
// @lc code=end


  //不能检测到后面差更大的组合
  // let low_index = 0;
  // let top_index = prices.length-1;

  // let low = prices[low_index];
  // let top = prices[top_index];

  // let res = 0;

  // prices.forEach((item,index)=>{
  //     if(item<low && index<top_index) {
  //         low = item;
  //         low_index = index;
  //     }
  //     if(item>top && index>low_index) {
  //         top = item;
  //         top_index = index;
  //     }
  // });

  //暴力解法超时了，时间复杂度是o(n^2)
  // let res = 0;

  // for(let i=0;i<prices.length;i++) {
  //     for(let j=i+1;j<prices.length;j++) {
  //         if(prices[j]-prices[i]>res) {
  //             res = prices[j]-prices[i];
  //         }
  //     }
  // }
  // return res;

  //没有遍历，会漏，把简单问题复杂化了
//     function getLeftMin(start, middle) {
    
//     return Math.min(...prices.slice(start, middle));
//   }
  
//   function getRightMax(middle, end) {
//     return Math.max(...prices.slice(middle, end + 1));
//   }

//   let start = 0;
//   let end = prices.length - 1;
//   let middle;
//   let par_min;
//   let par_max;
//   if((end + start) % 2 === 0) {//奇数个
//     middle = (end + start) / 2;
//     par_min = Math.min(getLeftMin(start, middle),getLeftMin(start, middle+1));
//     par_max = Math.max(getRightMax(middle, end),getRightMax(middle+1, end));
//   }else {//偶数个
//     middle = (end + start + 1) / 2;
//     par_min = getLeftMin(start, middle);
//     par_max = getRightMax(middle, end);
//   }

//     console.log(`par_min:${par_min};par_max:${par_max}`);

//   while (start !== end) {
//     let left_middle ;
//     let left_left_min ;
//     let left_right_max ;

//     if((middle - 1 + start) % 2 === 0) {
//         left_middle = (middle - 1 + start) / 2;
//         left_left_min = Math.min(getLeftMin(start, left_middle),getLeftMin(start, left_middle+1));
//         left_right_max = Math.max(getRightMax(left_middle, middle - 1),getRightMax(left_middle+1, middle - 1));
//     }else {
//         left_middle = (middle + start) / 2;
//         left_left_min = getLeftMin(start, left_middle);
//         left_right_max = getRightMax(left_middle, middle - 1);
//     }

//     let right_middle ;
//     let right_left_min ;
//     let right_right_max ;

//     if((middle + end) % 2 === 0) {
//         right_middle = (middle + end) / 2;
//         right_left_min = Math.min(getLeftMin(middle , right_middle),getLeftMin(middle , right_middle+1));
//         right_right_max = Math.max(getRightMax(right_middle, end),getRightMax(right_middle+1, end));
//     }else {
//         right_middle = (middle + end + 1) / 2;
//         right_left_min = getLeftMin(middle , right_middle);
//         right_right_max = getRightMax(right_middle, end);
//     }

//     if (left_left_min===par_min && left_right_max > par_max) {
//       end = middle - 1;
//       middle = left_middle;
//       par_max = left_right_max;
//     } 
//     if (right_right_max===par_max && right_left_min < par_min) {
//       start = middle;
//       middle = right_middle;
//       par_min = right_left_min;
//     } 

//     console.log(`par_min:${par_min};par_max:${par_max}`);

//     break;
//   }
//   return par_max - par_min > 0 ? par_max - par_min : 0;
