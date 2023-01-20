/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(" ");
    let reg = [...pattern];
    //要注意arr中的单词可能是关键词，比如constructor，在存入哈希表时加上一些额外的字符如“_”

    if(pattern.length!==arr.length) {
        return false;
    }

    let dictionary = [];
    let check = [];

    let index = 0;
    while(index<reg.length) {
        if(dictionary[reg[index]]===undefined) {
            if(check[arr[index]+"_"]===undefined) {
                dictionary[reg[index]] = arr[index];
                check[arr[index]+"_"] = reg[index];
            }else {
                //console.log("222");
                return false;
            }
        }else {
            if(arr[index]!==dictionary[reg[index]]) {
                //console.log("333");
                return false;
            }
        }
        //console.log(`dictionary[${reg[index]}] = ${dictionary[reg[index]]};arr${index} = ${arr[index]}`);
        index += 1;
    }

    return true;
    
};
// @lc code=end

// let pattern = "abba";
// let s = "dog constructor constructor dog";
// console.log(wordPattern(pattern,s));

