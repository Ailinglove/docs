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
var addTwoNumbers = function(l1, l2) {
  let resHead = new ListNode();
  let curP = resHead;

  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    let num = sum % 10;
    carry = sum >= 10 ? 1 : 0;
    curP.next = new ListNode(num, null);
    curP = curP.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return resHead.next;
};
