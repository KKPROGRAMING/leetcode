/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let s_ = [...s];
  s_.sort();
  let index = 0;
  let check = 0;
  let res = -1;
  while(index<s_.length) {
    if(index===s_.length-1) {
      if(check===0) {
        if(res===-1) {
          res = s.indexOf(s_[index]);
        }else {
          res = s.indexOf(s_[index])<res?s.indexOf(s_[index]):res;
        }
      }else {
        break;
      }
    }else {
      if(s_[index]!==s_[index+1]&&check===0) {
        if(res===-1) {
          res = s.indexOf(s_[index]);
        }else {
          res = s.indexOf(s_[index])<res?s.indexOf(s_[index]):res;
        }
      }else if(s_[index]!==s_[index+1]&&check===1) {
        check = 0;
      }else if(s_[index]===s_[index+1]) {
        check = 1;
      }
    }
    
    index += 1;
  }
  return res;
};
// @lc code=end
