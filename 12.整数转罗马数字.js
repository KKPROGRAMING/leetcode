/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  
  let res = "";
  if(num>=1000) {
    let m = Math.floor(num/1000);
    num -= m*1000;
    res += Array(m).fill('M').join("");
  }

  if(num>=900) {
    num -= 900;
    res += 'CM';
  }

  if(num>=500) {
    num -= 500;
    res += 'D';
  }

  if(num>=400) {
    num -= 400;
    res += 'CD';
  }

  if(num>=100) {
    let c = Math.floor(num/100);
    num -= c*100;
    res += Array(c).fill('C').join("");
  }

  if(num>=90) {
    num -= 90;
    res += 'XC';
  }

  if(num>=50) {
    num -= 50;
    res += 'L';
  }

  if(num>=40) {
    num -= 40;
    res += 'XL';
  }

  if(num>=10) {
    let x = Math.floor(num/10);
    num -= x*10;
    res += Array(x).fill('X').join("");
  }

  if(num>=9) {
    num -= 9;
    res += 'IX';
  }

  if(num>=5) {
    num -= 5;
    res += 'V';
  }

  if(num>=4) {
    num -= 4;
    res += 'IV';
  }

  if(num>=1) {
    res += Array(num).fill('I').join("");
  }
  
  return res;
};
// @lc code=end

console.log(intToRoman(1994));
