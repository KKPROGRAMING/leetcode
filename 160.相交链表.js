/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let tmpA = headA;
  let tmpB = headB;

  while (tmpA !== null || tmpB !== null) {
    if (tmpA !== null) {
      if (tmpA.check !== "b") {
        tmpA.check = "a";
        tmpA = tmpA.next;
      } else {
        return tmpA;
      }
    }

    if (tmpB !== null) {
      if (tmpB.check !== "a") {
        tmpB.check = "b";
        tmpB = tmpB.next;
      } else {
        return tmpB;
      }
    }
  }

  return headA === headB ? headA : null;
};
// @lc code=end
