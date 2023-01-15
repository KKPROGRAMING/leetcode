/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
function howDepth(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(howDepth(node.left), howDepth(node.right));
}

//coding新思路：可以在外面写函数，不一定要在内部写函数；可以在函数自身做递归
//这是自顶向下的解法，可以去官方题解看一下自底向上的解法
var isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  return (
    Math.abs(howDepth(root.left) - howDepth(root.right))<=1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );

  //     return Math.abs(howDepth(ParRoot.left) - howDepth(ParRoot.right)) <= 1
  //       ? true
  //       : false;
  //   }

  //   let sub = [root];
  //   let res = [];
  //   while(sub.length!==0) {
  //     let tmp_sub = [];
  //     sub.forEach(item=>{
  //         if(item!==null) {
  //             tmp_sub.push(item.left,item.right);
  //         }
  //         if(!ifSubBalanced(item)) {
  //             res.push(1);
  //         }
  //     });
  //     sub = tmp_sub;
  //   }
};
// @lc code=end
