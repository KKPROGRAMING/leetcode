/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) {
    return "0";
  }
  let abs = Math.abs(num);
  let bin = abs.toString(2);
  if (bin.length < 32) {
    let addStr = Array(32 - bin.length)
      .fill("0")
      .join("");
    bin = addStr.concat(bin);
  }
  //console.log(bin);
  if (num < 0) {
    let tmpBin = "";
    [...bin].forEach((item) => {
      tmpBin += item === "0" ? "1" : "0";
    });
    bin = (parseInt(tmpBin, 2) + 1).toString(2);
  }
  //console.log(bin);
  //此时获得一个32位的二进制数

  let items = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let res = "";
  let index = 0;
  let ifStart = false;
  while (index <= 28) {
    let tmp = bin.slice(index, index + 4);
    
    if(!ifStart) {
        if(items[parseInt(tmp,2)]!=='0') {
            res += items[parseInt(tmp,2)];
            ifStart = true;
        }
    }else {
        res += items[parseInt(tmp,2)];
    }

    index += 4;
  }

  return res;
};

// @lc code=end

// let num = -2;
// console.log(num.toString(2));
