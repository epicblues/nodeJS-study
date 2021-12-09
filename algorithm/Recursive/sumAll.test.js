const sumAll = (target) => {
  if (target === 1) return target;

  return sumAll(target - 1) + target;
};

test("sumAll test", () => {
  expect(sumAll(10)).toBe(55);
});
