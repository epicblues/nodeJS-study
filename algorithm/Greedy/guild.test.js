// @ts-check

const guild = (input = "") => {
  // 먼저 오름차순으로 정렬한다.
  const [N, ...members] = input.split(/\s/).map(Number);
  members.sort((a, b) => a - b);

  // 원본을 건드리지 않으면서 indexing

  let startIndex = 0;
  let endIndex = 0;

  let answer = 0;
  while (startIndex < N) {
    let groupNum = members[startIndex];

    if (startIndex - endIndex + 1 === groupNum) {
      answer++;
      startIndex++;
      endIndex = startIndex;
    } else {
      startIndex++;
    }
  }
  return answer;
};

test("should first", () => {
  expect(guild("5\n2 3 1 2 2")).toBe(2);
  expect(guild("8\n2 3 1 2 2 2 4 5")).toBe(3);
});
