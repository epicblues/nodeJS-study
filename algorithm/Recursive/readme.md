# Recursive Programming

## 장점 : 복잡한 for문 등의 반복문을 사용하지 않고 간결하게 표시.

## 단점 : Call Stack 문제, 함수 호출 속도 문제(반복문보다 느리다.)

## 핵심

- whats the smallest amount of work I can do in each iteration?
- suppose that I'm laziest person

### ex1) String 뒤집기

```javascript
const stringReverse = (target) => {
  if (target.length === 0) return ""; // base case

  const slicedTarget = target.substring(1); // shrink problem space
  const firstChar = target.charAt(0); // smallest unit of work to contribute
  return stringReverse(slicedTarget) + firstChar;
};
```

### ex2) 2진법 구하기

```javascript
const decimalToBinary = (decimal) => {
  if (decimal === 1 || decimal === 0) {
    return String(decimal); // base case(가장 첫 번째 자리수)
  }
  // 2로 나누었을 때 떨어지면 0
  // 2로 나누었을 때 1이 남으면 1
  const share = Math.floor(decimal / 2);
  const remainder = Math.ceil(decimal / 2) - share;
  return decimalToBinary(Math.floor(decimal / 2)) + remainder;
};
```

### ex3) 자연수 총합 구하기

```javascript
const sumAll = (target) => {
  if (target === 1) return target;

  return sumAll(target - 1) + target;
};
```

## Divide And Conquer

1. Divide problem into several smaller subproblems
2. Conquer the subproblems by solving them recursively
3. Combine the solutions to get a solutions to the subproblems

### ex1) 이분 탐색 (크기 비교에 주의!)

```javascript
const binarySearch = (A, left, right, x) => {
  // 트리가 아닌 단순한 이분 탐색
  // left와 right는 단순한 index?
  if (left > right) return -1; // base case

  const mid = Math.floor((left + right) / 2);
  if (A[mid] === x) return mid;

  if (A[mid] > x) {
    // 정렬되어 있어야 한다는 것의 의미. 장점 : 뒷부분은 탐색할 필요가 없다!
    // 내가 처음에 만든 식은 특정한 패턴으로 정렬되어 있다는 것을 활용 못한다.
    // 사실상 brute force로 모든 요소를 탐색하는 것과 다르지 않다.

    return binarySearch(A, left, mid - 1, x);
  } else {
    return binarySearch(A, mid + 1, right, x);
  }
  // 하나라도 -1이 아닌 것이 발견되면 완전히 함수를 마치고 return;
};
```

### ex2) Merge Sort

```javascript
const mergeSort = (numArr) => {
  // base case scenario
  if (numArr.length === 1) return numArr;
  if (numArr.length === 2) {
    if (numArr[0] > numArr[1]) {
      let temp = numArr[0];
      numArr[0] = numArr[1];
      numArr[1] = temp;
    }
    return numArr;
  }
  const midIndex = Math.floor((0 + numArr.length - 1) / 2);

  const firstArr = mergeSort(numArr.slice(0, midIndex));
  const secondArr = mergeSort(numArr.slice(midIndex));

  const newArr = [];
  // 하나씩 비교해가면서 넣는다
  let i = 0;
  let j = 0;

  while (true) {
    if (firstArr[i] > secondArr[j]) {
      newArr.push(secondArr[j]);
      j++;
    } else {
      newArr.push(firstArr[i]);
      i++;
    }
    // 먼저 배열 순회가 끝났다 == 남은 배열은 있는 그대로 push;

    if (i === firstArr.length) {
      while (j < secondArr.length) {
        newArr.push(secondArr[j]);
        j++;
      }
      return newArr;
    } else if (j === secondArr.length) {
      while (i < firstArr.length) {
        newArr.push(firstArr[i]);
        i++;
      }
      return newArr;
    }
  }
};
```

### ex3) Reverse Linked List

```javascript
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
```

### ex4) merge sortedLinkedList

#### 포인터를 하나만 이동하는 것에 매우 주의하자.

```javascript
const mergeTwoSortedLinkedLists = (a, b) => {
  if (a === null || b === null) {
    return a || b;
  }
  if (a.data < b.data) {
    // a는 b를 바로 포인팅 하는 것이 아니다.
    // 나머지 요소 중에서 a보다 크고 b보다 작은 노드가 발견될 수 있다.
    // 나의 실수 : 작은 요소의 다음 요소를 b로 바로 지정했다.
    a.next = mergeTwoSortedLinkedLists(a.next, b);
    return a;
  }
  {
    b.next = mergeTwoSortedLinkedLists(a, b.next);
    return b;
  }
};
```
