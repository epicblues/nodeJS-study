const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((item) => +item);
const N = inputs[0];
// 최대한 재귀 함수를 쓰지 않으려고 노력할 것
// for 문으로 효율적으로 구현할 수 있는 경우가 많다.
const memo = [0, inputs[1], inputs[1] + inputs[2]];
for (let i = 3; i <= N; i++) {
  // Top-Down 보다는 Bottom-Up을 먼저 시도해보자.
  memo[i] = Math.max(inputs[i - 1] + memo[i - 3], memo[i - 2]) + inputs[i];
}

console.log(memo[N]);
