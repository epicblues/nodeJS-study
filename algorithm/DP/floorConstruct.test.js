const construct = (input = "") => {
  const N = +input; // 가로

  // 3가지

  const d = Array(N + 1).fill(0);
  d[1] = 1; // (2 X 1 타일)
  d[2] = 3;
  for (let i = 3; i <= N; i++) {
    d[i] = (d[i - 2] * 2 + d[i - 1]) % 796796;
  }

  return d[N];
};

test("should ", () => {
  expect(construct(4)).toBe(11);
});
