/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head===null) {
        return null;
    }
    if(head.next===null) {
        return head;
    }

    let res = head;
    let tmp = head.next;
    let str = [head.val];

    let now = res;
    while(tmp!==null) {
        now.next = null;
        if(!str.includes(tmp.val)){
            now.next = tmp;
            now = now.next;

            str.push(tmp.val);
        }
        tmp = tmp.next;
    }

    return res;
};
// @lc code=end

