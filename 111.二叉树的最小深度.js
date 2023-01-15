/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  //自顶向下
  let nodes = [root];
  let cnt = 0;
  let check = 0;

  while (nodes.length !== 0) {
    let tmp_nodes = [];
    let index = 0;
    while (index <= nodes.length - 1) {
      if (nodes[index] !== null) {
        if (nodes[index].left === null && nodes[index].right === null) {
          cnt += 1;
          check = 1;
          break;
        } else {
          tmp_nodes.push(nodes[index].left, nodes[index].right);
        }
      }
      index += 1;
    }
    if (check === 0) {
      cnt += 1;
      nodes = tmp_nodes;
    }else {
        break;
    }
  }

  return root === null ? 0 : cnt;
};

// @lc code=end

//function height(node) {
//这个解法超时了，更深的子树收敛慢（自底向上）
// if(node===null) {
//     return 0;
// }
// if(height(node.left)!==0 && height(node.right)!==0) {
//     return 1 + Math.min(height(node.left),height(node.right));
// }else if(height(node.left)===0 && height(node.right)!==0) {
//     return 1+height(node.right);
// }else if(height(node.left)!==0 && height(node.right)===0) {
//     return 1+height(node.left);
// }else {
//     return 1;
// }

//}
