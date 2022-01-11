// @ts-check

const changeCoin = (total) => {
  const coins = [500, 100, 50, 10];
  let index = 0; // 50작원부터 시작
  let change = 0;
  do {
    if (total - coins[index] < 0) {
      index++;
      continue;
    }
    total -= coins[index];
    change++;
  } while (total > 0);

  return change;
};
//
test("test", () => {
  expect(changeCoin(1260)).toBe(6);
});
