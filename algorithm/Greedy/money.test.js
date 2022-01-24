const money = (input = "") => {
  const [N, ...cashes] = input.split(/\s/).map(Number);

  let sum = 0;
  cashes.sort((a, b) => b - a);

  let min = 1;
  while (true) {
    let temp = min;
    for (let cash of cashes) {
      if (temp < cash) continue;
      temp -= cash;
      if (temp === 0) break;
    }
    if (temp > 0) break;
    min++;
  }

  return min;
};

test("should first", () => {
  expect(money("5\n3 2 1 1 9")).toBe(8);
});
