// @ts-check

const sumOrMul = (input = "") => {
  const numArr = input.split("").map(Number);

  let answer = numArr.reduce((prev, curr) => {
    if (prev <= 1 || curr <= 1) return prev + curr;
    return prev * curr;
  });

  return answer;
};

test("should first", () => {
  expect(sumOrMul("02984")).toBe(576);
  expect(sumOrMul("567")).toBe(210);
});
