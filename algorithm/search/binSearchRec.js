const binarySearch = (arr, target, start, end) => {
  if (start > end) return null;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  // 나머지 부분을 탐색할 필요가 없다.!!!
  else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
};

const result = binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7, 0, 9);

console.log(result ? result + 1 : "없음");
