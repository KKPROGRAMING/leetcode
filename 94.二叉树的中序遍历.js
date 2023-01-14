/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root===null) {
        return [];
    }

    let res = [];
    function inorder(node,res) {
        if(node.left===null && node.right===null) {
            res.push(node.val);
            return ;
        }
        if(node.left!==null) {
            inorder(node.left,res);
        }
        res.push(node.val);
        if(node.right!==null) {
            inorder(node.right,res);
        }
    }
    inorder(root,res);
    return res;
};
// @lc code=end

