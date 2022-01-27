let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let M = Number(input[0]);
let N = Number(input[1]);

const isPrime = Array(N + 1).fill(true);
// 일단 소수라고 default로 제시하고 들어간다.
isPrime[1] = false;

for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
  // 해당 소가 소수면 N 까지 해당 소수의 배수들은 소수가 아니다.
  // 해당 과정을 통해 N보다 작은 수들 중 false가 되지 않은 것들은 소수다.(어떤 수의 배수가 아니다.)
  if (isPrime[n]) {
    let m = 2;
    while (n * m <= N) {
      isPrime[n * m] = false;
      m++;
    }
  }
}

const answer = [];
for (let n = M; n <= N; n++) {
  if (isPrime[n]) {
    answer.push(n);
  }
}
console.log(answer.join("\n"));
