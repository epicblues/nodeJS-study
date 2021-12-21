const input = Number(10000);
const memo = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
  // 내가 계속 놓치는 부분 : 왜 문제에서 굳이 15746을 나누라고 했을까?
}

console.log(memo[input]);
