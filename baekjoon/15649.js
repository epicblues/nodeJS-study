// @ts-check

const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// N까지의 숫자 중에서 M개를 나열한 수열

// base case : buffer.length === M;
const answer = [];
const checker = Array(N + 1).fill(false);

const getSequence = (buffer, next) => {
  checker[next] = true;
  buffer.push(next);
  if (buffer.length === M) {
    answer.push(buffer.join(" "));
    checker[buffer.pop()] = false;
    return;
  }
  for (let i = 1; i <= N; i++) {
    // 다시 1부터 확인해야 checker를 활용하는 의미가 있다.
    // 3 1 2 4
    if (checker[i]) continue;
    getSequence(buffer, i);
  }
  checker[buffer.pop()] = false;
};

for (let i = 1; i <= N; i++) {
  getSequence([], i);
}

console.log(answer.join("\n"));
