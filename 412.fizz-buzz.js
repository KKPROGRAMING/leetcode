/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let fizzCnt = 1;
    let buzzCnt = 1;
    let answer = [];
    let index = 0;
    while(index<n) {
        let input = "";
        if(fizzCnt===3) {
            input += 'Fizz';
            fizzCnt = 1;
        }else {
            fizzCnt += 1;
        }
        if(buzzCnt===5) {
            input += 'Buzz';
            buzzCnt = 1;
        }else {
            buzzCnt += 1;
        }
        if(input.length===0) {
            input = String(index+1);
        }
        answer.push(input);
        index += 1;
    }
    return answer;
};
// @lc code=end

