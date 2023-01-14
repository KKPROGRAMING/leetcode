/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null) {
        if(q===null) {
            return true;
        }else {
            return false;
        }
    }
    if(q===null) {
        if(p===null) {
            return true;
        }else {
            return false;
        }
    }

    let res = [];
    function isSameNode(p_,q_,res) {
        if(p_.left!==null && q_.left!==null) {
            isSameNode(p_.left,q_.left,res);
        }else if(p_.left===null && q_.left===null) {

        }else {
            res.push(1);
        }

        if(p_.val!==q_.val) {
            res.push(1);
        }

        if(p_.right!==null && q_.right!==null) {
            isSameNode(p_.right,q_.right,res);
        }else if(p_.right===null && q_.right===null) {

        }else {
            res.push(1);
        }
    }
    isSameNode(p,q,res);
    return res.length===0?true:false;
};
// @lc code=end

