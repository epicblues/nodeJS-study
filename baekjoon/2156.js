const [N, ...wines] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

const d = Array(N + 1).fill(0);

d[0] = 0;
d[1] = wines[0];
d[2] = wines[0] + wines[1];

for (let i = 3; i <= N; i++) {
  d[i] = Math.max(
    d[i - 2] + wines[i - 1], // 와인 고른 선택지
    d[i - 3] + wines[i - 1] + wines[i - 2], // 와인 고르고 다음 와인 고름
    d[i - 1] // 아무것도 안고름
  );
}

console.log(d[N]);
