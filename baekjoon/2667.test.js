let [size, ...strArr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

size = +size;

const matrix = strArr.map((str) => {
  const arr = [];
  for (let char of str) {
    arr.push(+char);
  }

  return arr;
});

const answer = [];
let count = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dfs = (x, y, counter) => {
  if (matrix[x][y] === 0) return counter;
  matrix[x][y] = 0;
  counter[0]++;
  console.log(matrix);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < size && ny < size && nx >= 0 && ny >= 0) {
      dfs(nx, ny, counter);
    }
  }

  return counter;
};

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const [result] = dfs(i, j, [0]);
    if (result >= 1) {
      count++;
      answer.push(result);
    }
  }
}

answer.sort();

console.log([count, ...answer].join("\n"));
