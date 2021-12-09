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

// test case 작성 먼저

test("binary Search Sample", () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 10, 3)).toBe(3);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 10, 100)).toBe(-1);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100], 0, 10, 100)).toBe(
    10
  );
});
