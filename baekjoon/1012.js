//@ts-check
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = +inputs[0];
let count = 0;
let answer = [];
let index = 1;

const dfs = (x, y, counter, matrix, M, N) => {
  if (matrix[x][y] === 0) return counter;
  matrix[x][y] = 0;
  counter[0]++;

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
      dfs(nx, ny, counter, matrix, M, N);
    }
  }
  return counter;
};

while (count !== T) {
  const [M, N, K] = inputs[index].split(" ").map((i) => +i);
  // M : X N : Y

  let planted = 0;

  const matrix = Array(N)
    .fill()
    .map((i) => Array(M).fill(0));
  for (let i = index + 1; i <= index + K; i++) {
    const [x, y] = inputs[i].split(" ").map((a) => +a);
    matrix[y][x] = 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const [result] = dfs(i, j, [0], matrix, M, N);
      if (result > 0) {
        planted++;
      }
    }
  }

  answer.push(planted);
  index += K + 1;
  count++;
}

console.log(answer.join("\n"));
