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
        return newArr;
      }
    }
  }
};

test("mergeSort Test", () => {
  expect(mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20])).toEqual([
    -1, 0, 1, 2, 3, 4, 7, 9, 10, 20,
  ]);
});
