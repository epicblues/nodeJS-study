const stringReverse = (target) => {
  if (target.length === 0) return ""; // base case

  const slicedTarget = target.substring(1); // shrink problem space
  const firstChar = target.charAt(0); // smallest unit of work to contribute
  return stringReverse(slicedTarget) + firstChar;
};

test("String Opposite", () => {
  expect(stringReverse("kmsbakas")).toBe("sakabsmk");
  expect(stringReverse("abcdefghi")).toBe("ihgfedcba");
});
