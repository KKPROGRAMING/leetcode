/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  //Brian Kernighan 算法
  //令 x = x & (x-1)，该运算将 x 的二进制表示的最后一个 1 变成 0。
  //重复该操作直到X变成 0，操作次数即为「一比特数」。

  let res = [];
  let index = 0;
  while (index <= n) {
    let cnt = 0;
    let tmp = index;
    while (tmp!==0) {
        tmp = tmp&(tmp-1);
        cnt += 1;
      if (tmp === 0) {
        break;
      }
    }
    res[index] = cnt;
    index += 1;
  }
  return res;
};
// @lc code=end
