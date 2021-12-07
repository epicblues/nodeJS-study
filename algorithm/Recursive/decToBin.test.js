const decimalToBinary = (decimal) => {
  // 가장 큰 자리 수 찾기

  if (decimal === 1 || decimal === 0) {
    return String(decimal); // base case
  }
  const share = Math.floor(decimal / 2);
  const remainder = Math.ceil(decimal / 2) - share;
  return decimalToBinary(Math.floor(decimal / 2)) + remainder;
};

test("decimal to binary", () => {
  expect(decimalToBinary(8)).toBe("1000");
  expect(decimalToBinary(7)).toBe("111");
});
