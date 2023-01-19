/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];

    function recursion(node,str) {
        if(node===null) {
            return ;
        }else {
            str = str.concat(node.val+"->");
            if(node.left===null && node.right===null) {
                str = [...str].slice(0,-2).join("");
                res.push(str);
            }else {
                recursion(node.left,str);
                recursion(node.right,str);
            }
        }
    }

    recursion(root,"");
    return res;
};
// @lc code=end


