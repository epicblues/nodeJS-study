const canSum = (target, numbers) => {
  const table = Array(target + 1)
    .fill()
    .map(() => false);
  table[0] = true; // canSum(0,[whateverArray]) always true
  // 따라서 0에서 numbers 더한 숫자도 무조건 true
  // 배열의 index와 basecase를 적극적으로 사용하자.
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let number of numbers) {
        const nextNumber = i + number;
        if (nextNumber > target) continue;
        table[nextNumber] = true;
        if (nextNumber === target) return true;
      }
    }
    if (i === target) return false;
  }
};
// time : O(m*n)
// space : O(m)
console.log(canSum(5, [4, 3]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
