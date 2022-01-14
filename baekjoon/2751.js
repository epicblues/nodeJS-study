// @ts-check

const [N, ...nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

const mergeSort = (start, end) => {
  if (start >= end) return [nums[start]];
  const mid = Math.floor((start + end) / 2);

  const leftArr = mergeSort(start, mid);
  const rightArr = mergeSort(mid + 1, end);
  // 두 공간은 이제 정렬되었다.

  let newArr = [];

  let left = 0;
  let right = 0;
  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) {
      newArr.push(leftArr[left]);
      left++;
    } else {
      newArr.push(rightArr[right]);
      right++;
    }
  }

  // 나머지를 넣어야 한다.
  // 내가 가장 심하게 놓친 것
  // concat을 쓰면 내가 등록한 배열도 다 중복되어서 들어간다.
  while (left < leftArr.length) {
    newArr.push(leftArr[left]);
    left++;
  }

  while (right < rightArr.length) {
    newArr.push(rightArr[right]);
    right++;
  }
  return newArr;
};
const answers = mergeSort(0, nums.length - 1);
console.log(answers.join("\n"));
