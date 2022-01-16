const N = 28;

const table = Array(30000).fill(0);

// N번째 단계에서 완전 최솟값을 구한다.

for (let i = 2; i <= N; i++) {
  // 5배
  table[i] = table[i - 1] + 1;

  if (i % 2 === 0) table[i] = Math.min(table[i], table[i / 2] + 1);
  if (i % 3 === 0) table[i] = Math.min(table[i], table[i / 3] + 1);
  if (i % 5 === 0) table[i] = Math.min(table[i], table[i / 5] + 1);
  // 결국 3 가지 경우의 수 중 최솟값을 구하게 된다.;
}

console.log(table[N]);
