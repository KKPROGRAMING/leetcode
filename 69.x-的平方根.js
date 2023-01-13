/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }
  if (x < 4) {
    return 1;
  }

  let length_ = Math.floor(parseInt(x).toString(2).length / 2);
  let tmp = x >> length_;
  if (tmp * tmp > x) {
    while (tmp - 1 > 1) {
      if ((tmp - 1) * (tmp - 1) <= x && tmp * tmp > x) {
        return tmp - 1;
      }
      tmp -= 1;
    }
  } else {
    while (tmp <= x / 2) {
      if (tmp * tmp <= x && (tmp + 1) * (tmp + 1) > x) {
        return tmp;
      }
      tmp += 1;
    }
  }
};
// @lc code=end

