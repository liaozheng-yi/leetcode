### 删除链表中的节点

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 **要被删除的节点** 。

示例 1：

输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

**提示：**

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。
- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
- 不要从你的函数中返回任何结果。

````javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
````

### 删除链表的倒数第N个节点

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

**进阶：**你能尝试使用一趟扫描实现吗？

````javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  let first = head
  let second = dummy
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first != null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next
  return dummy.next;
};
````

### 反转链表

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

````javascript
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
var reverseList = function(head) {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};
````

### 合并两个有序链表

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

````javascript
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
var mergeTwoLists = function (l1, l2) {
  const dummp = new ListNode(0)
  let cur = dummp
  while (l1 !== null && l2 !== null) {
    if (l1.val >= l2.val) {
      cur.next = l2
      l2 = l2.next
    } else {
      cur.next = l1
      l1 = l1.next
    }
    cur = cur.next
  }
  cur.next = l1 === null ? l2 : l1
  return dummp.next
};
````

### 回文链表

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

````javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function countLength(head) {
  let cur = head
  let length = 0
  while (cur !== null) {
    length++
    cur = cur.next
  }
  return length
}
var isPalindrome = function (head) {
  const length = countLength(head)
  let cur = head
  let forward
  for (let i = 1; i <= parseInt(length / 2); i++) {
    cur.next.prev = cur
    cur = cur.next
  }
  if (length % 2 == 1) {
    forward = cur.prev
    cur = cur.next
  } else {
    forward = cur.prev
  }
  let flag = true
  for (let i = 1; i <= parseInt(length / 2); i++) {
    if (forward.val !== cur.val) {
      return false
    } else {
      forward = forward.prev
      cur = cur.next
    }
  }
  return flag
};
````

