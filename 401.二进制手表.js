/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn >= 9) {
    return [];
  }

  let hourStore = [[0], [1, 2, 4, 8], [3, 5, 6, 9, 10], [7, 11]];
  let minStore = [
    [0], //1
    [1, 2, 4, 8, 16, 32], //6
    [3, 5, 6, 9, 10, 12, 17, 18, 20, 24, 33, 34, 36, 40, 48], //15
    [
      7, 11, 13, 14, 19, 21, 22, 25, 26, 28, 35, 37, 38, 41, 42, 44, 49, 50, 52,
      56,
    ], //20
    [15, 23, 27, 29, 30, 39, 43, 45, 46, 51, 53, 54, 57, 58], //14
    [31, 47, 55, 59], //4
  ];

  let res = [];

  let hour = 0;
  let min = turnedOn;
  while (hour <= turnedOn) {
    if (hour < 4 && min < 6) {
      hourStore[hour].forEach((item_h) => {
        minStore[min].forEach((item_m) => {
          res.push(formatter(item_h,'hour') + ":" + formatter(item_m,'min'));
        });
      });
    }

    hour++;
    min--;
  }

  return res;
};

function formatter(num, type) {
  if (type === "hour") {
    return num + "";
  } else if (type == "min") {
    return num >= 10 ? num + "" : "0" + num;
  }
}
// @lc code=end

//console.log(formatter(1,'hour'));
