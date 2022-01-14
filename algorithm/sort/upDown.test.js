const upDown = (input = "") => {
  // 내림차순
  const [N, ...num] = input.split("\n").map((i) => +i);
  num.sort((a, b) => b - a);
  return num.join(" ");
};

test("should ", () => {
  expect(upDown("3\n15\n27\n12")).toBe("27 15 12");
});
