const bowling = (input = "") => {
  const [N, M, ...balls] = input.split(/\s/).map(Number);

  let weightMapper = Array(M + 1).fill(0);

  for (let weight of balls) {
    weightMapper[weight]++;
  }
  let result = 0;

  for (let i = 1; i <= N; i++) {
    result += N - weightMapper[balls[i - 1]];
  }
  return result / 2; // 고르는 순서를 따지지 않는다.
};

test("should first", () => {
  expect(bowling("5 3\n1 3 2 3 2")).toBe(8);

  expect(bowling("8 5\n1 5 4 3 2 4 5 2")).toBe(25);
});
