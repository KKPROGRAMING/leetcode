/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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

//递归解法
//runtime beats 20.15 %;memory usage beats 17 %
var reverseList = function(head) {
    let res ;
    function recursion(node) {
        if(node===null) {
            res = null;
        }else {
            if(node.next===null) {
                res = node;
                return node;
            }else {
                let tmp = recursion(node.next);
                tmp.next = node;
                node.next = null;
                //console.log(`tmp:${tmp.val},head:${node.val}`);
                return node;
            }
        }
    }
    recursion(head);
    return res;
}

//迭代解法
//runtime beats 83.84 %;memory usage beats 79.24 % 
var reverseList = function(head) {
    if(head===null) {
        return null;
    }
    if(head.next===null) {
        return head;
    }
    let front = head;
    let end = head.next;
    front.next = null;
    while(end!==null) {
        let next = end.next;

        end.next = front;
        //front.next = null;

        front = end;
        end = next;

        //console.log(`front:${front.val},end:${end===null?null:end.val}`);
    }
    return front;
};
// @lc code=end

