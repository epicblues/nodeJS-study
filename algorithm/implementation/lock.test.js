// @ts-check
function solution(key = [[]], lock = [[]]) {
  var answer = true;
  let blankCount = 0;

  // for (let row of lock) {
  //   for (let val of row) {
  //     if (val === 0) blankCount++;
  //   }
  // }

  return answer;
}

test("should first", () => {
  expect(
    solution(
      [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
      ],
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ]
    )
  ).toBe(true);
});
