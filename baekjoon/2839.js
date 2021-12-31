const N = +require("fs").readFileSync("/dev/stdin").toString();

function getAnswer(N) {
  // best case
  if (N % 5 === 0) return N / 5;
  // 실수한 부분 : 5의 몫이 클 수록 정답이라는 것을 잊음
  // 어떻게든 나누어 떨어지기만 하면 답이라 생각
  let share = Math.floor(N / 5);
  while (share >= 0) {
    let remainder = N - share * 5;
    if (remainder % 3 === 0) return share + remainder / 3;
    share--;
  }
  return -1;
}

console.log(getAnswer(N));
