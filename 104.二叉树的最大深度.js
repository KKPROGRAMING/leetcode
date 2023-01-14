/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    function howDepth(node) {
        if(node===null) {
            return 0;
        }

        let level = 1;
        if(node.left===null && node.right===null) {
            return level;
        }else {
            level += Math.max(howDepth(node.left),howDepth(node.right));
            return level;
        }
    }
    return howDepth(root);
};
// @lc code=end

