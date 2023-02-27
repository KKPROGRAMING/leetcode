/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b)=>a-b);
    s = s.sort((a,b)=>a-b);
    let g_index = 0;
    let s_index = 0;
    let res = 0;
    while(g_index<g.length && s_index<s.length) {
        if(s[s_index]>=g[g_index]) {
            res += 1;
            g_index ++;
            s_index ++;
        }else {
            s_index ++;
        }
    }
    return res;

    //下面这种行不通
    // let cnt = 0;
    // let sum = 0;
    // let minus = [];
    // g.forEach((item,index)=>{
    //     let tmp;
    //     if(index>=s.length) {
    //         tmp = -item;
    //     }else {
    //         tmp = s[index]-item;
    //     }

    //     if(tmp>=0) {
    //         cnt += 1;
    //         sum += tmp;
    //     }else {
    //         minus.push(tmp);
    //     }
    // })
    // minus.sort((a,b)=>b-a);
    // console.log(minus);
    // let index = 0;
    // while(index<minus.length && sum>=0) {
    //     sum += minus[index];
    //     cnt ++ ;
    // }
    // return minus.length===0?cnt:cnt-1;
};

console.log(findContentChildren([10,9,8,7],[5,6,7,8]));
// @lc code=end

