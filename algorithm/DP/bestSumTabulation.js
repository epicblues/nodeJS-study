const bestSum = (target, numbers) => {
  const table = Array(target + 1)
    .fill()
    .map((value) => {
      return null;
    });
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const next = num + i;
        if (next > target) continue;
        const originalCombination = table[next];
        const newCombination = [...table[i], num];
        table[next] =
          originalCombination === null ||
          originalCombination.length > newCombination.length
            ? newCombination
            : originalCombination;
      }
    }
  }

  return table[target];
};
// Time : O(m^2*n)
// Space : O(m^2)

console.log(bestSum(13, [1, 2, 3, 6, 9]));
