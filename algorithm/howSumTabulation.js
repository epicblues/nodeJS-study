const howSum = (target, numbers) => {
  const table = Array(target + 1)
    .fill()
    .map(() => {
      return null;
    });

  table[0] = []; // 빈 배열로 0을 만들 수 있다고 가정
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const newNum = i + num;
        if (newNum > target) continue;
        if (table[newNum] === null) table[newNum] = [...table[i], num];
        if (newNum === target) return table[newNum];
      }
    }
  }
  return table[target];
};

console.log(howSum(5, [2, 1]));
