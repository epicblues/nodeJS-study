class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
class LinkedList {
  constructor(...args) {
    this.head = null;
    this.length = 0;
  }

  get(index) {
    let current = this.head;
    if (current === null) return undefined;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (current === null) return undefined;
    }
    return current.data;
  }

  set(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
    this.length++;
  }
}

const newList = new LinkedList();
newList.set(5);
newList.set(4);
newList.set(3);
newList.set(2);
newList.set(1);
newList.set(6);

function reverseList(list) {
  if (list.length === 1) return list;
  if (list.length === 2) {
    const next = list.head.next;
    list.head.next.next = list.head;
    list.head.next = null;
    list.head = next; // reverse 됐으므로 이 리스트의 시작점도 바꿔야 한다.

    return list;
  }
  // 길이가 3 이상 Recursive
  const secondList = new LinkedList();
  secondList.head = list.head.next;
  secondList.length = list.length - 1;
  const reversedList = reverseList(secondList);
  let node = reversedList.head;
  for (let i = 0; i < reversedList.length - 1; i++) {
    node = node.next;
  }
  node.next = list.head;
  list.head = reversedList.head;
  return list;
}

test("LinkedList Works", () => {
  expect(newList.get(4)).toBe(1);
  expect(newList.length).toBe(6);
  expect(reverseList(newList).get(3)).toBe(3);
});
