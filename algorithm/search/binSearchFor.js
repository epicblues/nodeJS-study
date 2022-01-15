const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

let start = 0;
let end = 9;
let answer = null;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    answer = mid + 1;
    break;
  } else if (arr[mid] > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer ? answer : "없음");

// for문을 활용한 binarySearch
