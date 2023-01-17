/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function change(n) {
    let str = n.toString(10);
    let res = 0;
    [...str].forEach(item=>{
        res += item*item;
    });
    return res;
}
//console.log(change(310));
var isHappy = function(n) {
    let log = "";
    let tmp = n;
    while(1) {
        let tmp_res = change(tmp);
        if(tmp_res===1) {
            return true;
        }
        if(log.includes("/"+tmp_res+",")) {
            return false;
        }else {
            //console.log(tmp_res);
            log = log + "/" + tmp_res + ",";
            tmp = tmp_res;
        }
    }
};
// @lc code=end

