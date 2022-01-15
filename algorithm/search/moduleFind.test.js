const find = (input = "") => {
  let [N, store, M, buy] = input.split("\n");
  N = +N;
  let storeArr = store.split(" ").map((i) => +i);
  M = +M;
  let buyArr = buy.split(" ").map((i) => +i);

  // sort
  storeArr.sort((a, b) => a - b);

  // binary search
  const binarySearch = (start, end, target, arr) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return "yes";
      else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return "no";
  };

  let answerBuffer = ``;
  for (let item of buyArr) {
    const answer = binarySearch(0, N - 1, item, storeArr);
    answerBuffer += answer + " ";
  }

  return answerBuffer.trim();
};

test("should ", () => {
  expect(find("5\n8 3 7 9 2\n3\n5 7 9")).toBe("no yes yes");
});
