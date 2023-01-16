/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let tmp = head;
    while(tmp!==null) {
        if(tmp.check!==-1) {
            tmp.check = -1;
            tmp = tmp.next;
        }else {
            return true;
        }
    }
    return false;
};
// @lc code=end

