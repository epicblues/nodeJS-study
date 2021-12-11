class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }

  get length() {
    let a = 1;
    let head = this;
    while (head.next) {
      head = head.next;
      a++;
    }
    return a;
  }

  getNode(index) {
    let head = this;
    for (let i = 0; i < index; i++) {
      head = head.next;
    }
    return head;
  }

  print() {
    let head = this;
    const container = [];
    while (head) {
      container.push(head.data);
      head = head.next;
    }
    console.log(container);
  }
}

const mergeTwoSortedLinkedLists = (a, b) => {
  if (a === null || b === null) {
    return a || b;
  }
  if (a.data < b.data) {
    const mergedList = mergeTwoSortedLinkedLists(a.next, b);
    a.next = mergedList;
    return a;
  }
  {
    const mergedList = mergeTwoSortedLinkedLists(a, b.next);
    b.next = mergedList;
    return b;
  }
};

const headA = new LinkedListNode(1);
const [Anode1, Anode2, Anode3, Anode4, Anode5] = [
  new LinkedListNode(5),
  new LinkedListNode(9),
  new LinkedListNode(12),
  new LinkedListNode(-21),
  new LinkedListNode(13),
];
const headB = new LinkedListNode(-111);
headB.setNext(Anode4);
Anode4.setNext(Anode5);

headA.setNext(Anode1);
Anode1.setNext(Anode2);
Anode2.setNext(Anode3);
headA.print();
headB.print();

const mergedNode = mergeTwoSortedLinkedLists(headA, headB);
mergedNode.print();

test("merge Node test", () => {
  expect(mergedNode.length).toBe(7);
});
