class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// First crappy solution with multiple loops
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry: number = 0;
  let dummyStartNode = new ListNode();
  let current = dummyStartNode;

  while (l1 != null && l2 != null) {
    const addedNumber = carry + l1.val + l2.val;
    const nodeVal: number = addedNumber % 10;
    if (Math.floor(addedNumber / 10) > 0) {
      carry = 1;
    } else {
      carry = 0;
    }
    current.next = new ListNode(nodeVal, null);
    current = current.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l1 == null && l2 != null) {
    while (l2 != null) {
      const numToAdd = carry + l2.val;
      const nodeVal: number = numToAdd % 10;
      if (Math.floor(numToAdd / 10) > 0) {
        carry = 1;
      } else {
        carry = 0;
      }
      current.next = new ListNode(nodeVal, null);
      current = current.next;
      l2 = l2.next;
    }
  }
  if (l1 != null && l2 == null) {
    while (l1 != null) {
      const numToAdd = carry + l1.val;
      const nodeVal: number = numToAdd % 10;
      if (Math.floor(numToAdd / 10) > 0) {
        carry = 1;
      } else {
        carry = 0;
      }
      current.next = new ListNode(nodeVal, null);
      current = current.next;
      l1 = l1.next;
    }
  }
  if (carry == 1) {
    current.next = new ListNode(1, null);
  }

  return dummyStartNode.next;
}

// Second solution without the loops
// TODO: Add learning outcomes
const addTwoNumbersOptimized = (l1: ListNode | null, l2: ListNode | null) => {
  let carry = 0;
  let dummyStart = new ListNode();
  let currentPtr = dummyStart;

  while (l1 != null || l2 != null) {
    let x = l1?.val != undefined ? l1?.val : 0;
    let y = l2?.val != undefined ? l2?.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum);

    let newNode = new ListNode(sum % 10);
    currentPtr.next = newNode;
    currentPtr = currentPtr.next;

    l1 = l1!.next;
    l2 = l2!.next;
  }
};
