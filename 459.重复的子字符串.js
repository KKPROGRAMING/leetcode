/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
"abaababaab";
var repeatedSubstringPattern = function (s) {
  let sub_h = "";
  let sub_r = "";
  let subs = [];
  let head = 0;
  let rear = s.length - 1;
  while (head <= rear) {
    sub_h += s[head];
    sub_r = s[rear] + sub_r;
    //console.log(`sub_h=${sub_h.join("")},sub_r=${sub_r.join("")}`);
    if (sub_h === sub_r) {
      subs.push(sub_h);
    }
    head++;
    rear--;
  }

  //console.log(subs);
  if (subs.length === 1 && subs[0] === s) {
    return false;
  }
  let i = 0;
  while (i < subs.length) {
    let test = s.split(subs[i]).join("").trim();
    if (test.length === 0) {
      return true;
    }
    i++;
  }
  return false;
};
//console.log(repeatedSubstringPattern("a"));
// @lc code=end
