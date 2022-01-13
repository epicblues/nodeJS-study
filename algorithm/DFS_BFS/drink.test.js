const iceCream = (input = "") => {
  let [meta, ...ices] = input.split("\n");

  const [N, M] = meta.split(" ").map((i) => +i);

  const matrix = ices.map((str) => {
    const arr = [];
    for (let char of str) {
      arr.push(+char);
    }
    return arr;
  });

  let count = 0;
  // 먼저 배열 전체를 순회한다.
  const dfs = (row, col) => {
    if (row < 0 || row >= N || col < 0 || col >= M) return;
    if (matrix[row][col] === 1) return;
    matrix[row][col] = 1;

    dfs(row - 1, col);

    dfs(row, col - 1);

    dfs(row + 1, col);

    dfs(row, col + 1);
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 0) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

test("should ", () => {
  expect(iceCream("4 5\n00110\n00011\n11111\n00000")).toBe(3);
});
