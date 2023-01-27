/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  return addNow(l1,l2,0);
};
function addNow(node1,node2,carry) {
    if(node1===null && node2===null) {
        return carry===0?null:new ListNode(1,null);
    }

    let v1 = node1===null?0:node1.val;
    let v2 = node2===null?0:node2.val;
    let tmp = v1 + v2 + carry;
    carry = tmp>=10?1:0;
    tmp = tmp>=10?tmp-10:tmp;

    let next1 = node1===null?null:node1.next;
    let next2 = node2===null?null:node2.next;

    return new ListNode(tmp,addNow(next1,next2,carry));
}
// @lc code=end
