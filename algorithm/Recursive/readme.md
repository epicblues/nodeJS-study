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
