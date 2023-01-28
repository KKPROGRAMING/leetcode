/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  let res = "";
  let ifNumStart = false;
  let ifPoint = false;

  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);

  let index = 0;
  while (index < s.length) {
    if (
      s[index] === "0" ||
      s[index] === "1" ||
      s[index] === "2" ||
      s[index] === "3" ||
      s[index] === "4" ||
      s[index] === "5" ||
      s[index] === '6' ||
      s[index] === '7' ||
      s[index] === '8' ||
      s[index] === '9' 
    ) {
      ifNumStart = true;
      res += s[index];
    } else {
      if (ifNumStart) {
        break;
      } else {
        if (s[index] === "." && !ifPoint) {
          res += s[index];
          ifPoint = true;
          ifNumStart = true;
        } else if (s[index] === "+") {
          res = "";
          ifNumStart = true;
        } else if (s[index] === "-") {
          res = "-";
          ifNumStart = true;
        } else {
          break;
        }
      }
    }
    index += 1;
  }

  res = res === "" || res === "-" || res === "+" ? 0 : Number(res);
  if (res > max) {
    return max;
  } else if (res < min) {
    return min;
  } else {
    return Math.floor(res);
  }
};
// @lc code=end

