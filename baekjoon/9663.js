const N = +require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = 0;

// 대각선에 있는 것만 피하라.
// [x1 - x2] === [y1 - y2];
const createAnswer = (buffer = []) => {
  // 조건에 맞는지 확인한다.
  if (buffer.length === N) {
    buffer.pop();
    answer++;
    return;
  }
  step: for (let i = 0; i < N; i++) {
    const next = [buffer.length, i];
    for (let tuple of buffer) {
      if (
        Math.abs(tuple[0] - next[0]) === Math.abs(tuple[1] - next[1]) ||
        tuple[1] === next[1]
      )
        continue step;
    }
    buffer.push(next);
    createAnswer(buffer);
  }
  buffer.pop();
};

createAnswer();

console.log(answer);
