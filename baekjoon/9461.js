const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = +inputs[0];

const memo = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
//주어진 예시를 일단 메모에 등록한다.

function P(num) {
  // 메모에 이미 있는 답이면 바로 return
  // 나의 실수 : index 잘못 잡음(num + 1)
  if (memo[num - 1]) return memo[num - 1];
  // 특정 초반 패턴 이후 규칙이 반복된다는 것을 인지
  // 초반 base case가 너무 많아서 패턴을 확신하지 못했다.
  memo[num - 1] = P(num - 1) + P(num - 5);
  return memo[num - 1];
}

for (let i = 1; i <= T; i++) {
  console.log(P(+inputs[i]));
}
