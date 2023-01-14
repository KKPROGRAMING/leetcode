/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

//递归解法
//runtime beats 93.75 %
//memory usage beats 5.25 %
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  let res = [];
  function isSubSymmetric(left, right, res) {
    if (left !== null && right !== null) {
        if(left.val===right.val) {
            isSubSymmetric(left.left, right.right, res);
            isSubSymmetric(left.right, right.left, res);
        }else {
            res.push(1);
        }
    }else if(left === null && right === null){
      
    }else {
        res.push(1);
    }
  }

  isSubSymmetric(root.left,root.right,res);
  return res.length===0?true:false;

};

//迭代解法
//runtime beats 82.54 %
//memory usage beats 82.64 %
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    
    let left = [root.left];
    let right = [root.right];
    let left_ = "";
    let right_ = "";
    while(left.length!==0 && right.length!==0) {
        left.forEach(item=>{
            if(item===null) {
                left_=left_+"null,"
            }else {
                left_=left_+item.val+","
            }
        });
        right.forEach(item=>{
            if(item===null) {
                right_=right_+"null,"
            }else {
                right_=right_+item.val+","
            }
        });
        if(left_!==right_) {
            return false;
        }else {
            let tmp_l = [];
            left.forEach(item=>{
                if(item!==null) {
                    tmp_l.push(item.left,item.right);
                }
            });
            left = tmp_l;

            let tmp_r = [];
            right.forEach(item=>{
                if(item!==null) {
                    tmp_r.push(item.right,item.left);
                }
            });
            right = tmp_r;
        }
    }
    return true;
}
// @lc code=end

