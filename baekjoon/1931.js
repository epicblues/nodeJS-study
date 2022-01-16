const [N, ...nodes] = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");
const meetings = nodes.map((str) => str.split(" ").map((i) => +i));
// meeting = [a,b];
meetings.sort((m1, m2) => {
  // 끝나는 시간이 짧은 시간 순으로 나열하기;
  if (m1[1] !== m2[1]) {
    return m1[1] - m2[1];
  } else if (m1[1] === m2[1]) {
    // 끝나는 시간이 같을 경우
    // 시작 시간이 이른 회의들로 나열
    // 시작하자마자 바로 끝나는 회의를 등록하기 위함
    // 만약 반대의 순서로 했을 경우
    // 5 5 가 먼저등록되고
    // endTime이 5로 변경
    // 따라서 1 5 같이 유효한 회의를 등록할 수 없다.
    return m1[0] - m2[0];
  }
});

let count = 0;
let endTime = 0;
// 지금까지 회의가 진행됨
for (let meeting of meetings) {
  // 회의 끝난 시간보다 같거나 늦게 시작하는 회의는 okay
  // 아무리 짧은 텀의 회의를 먼저 골랐다고 해도
  // 이미 endTime이 설정되었기 때문에
  // 그 사이에 새로운 회의가 들어올 수 없다.
  if (endTime <= meeting[0]) {
    endTime = meeting[1];
    count++;
  }
}

console.log(count);
