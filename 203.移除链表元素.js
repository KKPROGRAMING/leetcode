/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head===null) {
        return null;
    }

    let res = new ListNode(0,head);
    let tmp = res;
    let tmp_next = head;
    while(tmp_next!==null && tmp!==null) {
        if(tmp_next.val===val) {
            tmp.next = tmp_next.next;
            tmp_next = tmp_next.next;
        }
        else {
            tmp = tmp.next;
            tmp_next = tmp===null?null:tmp.next;
        }
    }
    return res.next;
};
// @lc code=end

