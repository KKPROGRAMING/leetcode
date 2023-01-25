/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let _s = [...s];
    let i = 0;
    let j = _s.length-1;

    function check(c){
        c = String(c).toLowerCase();
        return c==='a'||c==='e'||c==='i'||c==='o'||c==='u';
    }
    while(i<j) {
        if(check(_s[i])&&check(_s[j])) {
            let change = _s[j];
            _s[j] = _s[i];
            _s[i] = change;
            i++;
            j--;
        }else {
            if(check(_s[i])) {
                j --;
            }else if(check(_s[j])) {
                i ++;
            }else {
                i ++;
                j --;
            }
        }
    }
    return _s.join("");
};
// @lc code=end

