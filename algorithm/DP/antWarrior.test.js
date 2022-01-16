const getMax = (input = "") => {
  let [N, ...nums] = input.split(/\s/).map((i) => +i);
  const d = Array(N + 1).fill(0);
  d[1] = nums[0]; // base case
  d[2] = nums[1];
  for (let i = 3; i <= N; i++) {
    d[i] = Math.max(d[i - 2] + nums[i - 1], d[i - 3] + nums[i - 2]);
  }
  console.log(d);
  return d[N];
};

// 선택하는 순간 폭이 적어진다.

test("should ", () => {
  expect(getMax("8\n1 3 1 5 7 1 10 5")).toBe(20);
});
