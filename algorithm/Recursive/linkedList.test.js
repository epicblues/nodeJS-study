const { node } = require("webpack");

class Node {
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
}

const linkedList = new Node(5);
const node1 = new Node(4);
const node2 = new Node(3);
const node3 = new Node(2);
const node4 = new Node(1);

linkedList.setNext(node1);
node1.setNext(node2);
node2.setNext(node3);
node3.setNext(node4);

const reverseLinkedList = (list) => {
  if (list.getNext() === null || list === null) return list;
  const p = reverseLinkedList(list.getNext());
  list.getNext().setNext(list);
  // 여전히 기존 리스트는 다음 리스트가 역전되기 전의 첫 번쨰 node를 포인팅하고 있다는 사실으 ㄹ이ㅛㅇ
  // 즉 역전된 리스트의 마지막 노드의 next를 list로 바꾸면 된다.
  list.setNext(null);

  return p;
};

const reversedList = reverseLinkedList(linkedList);
test("linkedList getNext", () => {
  // expect(linkedList.getNext().data).toBe(4);
  expect(reversedList.getNext().data).toBe(2);
});
