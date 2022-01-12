const myAnswer = (input = "") => {
  const x = input.charCodeAt(0) - 96;
  const y = +input[1];

  const dx = [-2, -2, 2, 2, 1, -1, 1, -1];
  const dy = [1, -1, 1, -1, 2, 2, -2, -2];
  let count = 0;
  // 총 8가지 경우의 수;
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx > 8 || nx < 1 || ny > 8 || ny < 1) continue;
    count++;
  }

  return count;
};

test("should ", () => {
  expect(myAnswer("c2")).toBe(6);
  expect(myAnswer("a1")).toBe(2);
});
