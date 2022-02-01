const [N, ...seq] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

// table 정의
// seq[i]로 끝나는 수열들 중 최댓값
const table = Array(N).fill(1);
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (seq[i] > seq[j]) {
      // 해당 수열의 최댓값인 seq[j] 보다 seq[i]가 크다.
      table[i] = Math.max(table[i], table[j] + 1);
      // 기존에 있는 최댓값과
      // 새로 들어온 숫자보다 작아서 길이가 증가한 수열들과 비교
    }
  }
  answer = Math.max(table[i], answer);
}
console.log(table);
console.log(table[N - 1]);
