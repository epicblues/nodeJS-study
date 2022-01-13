const mazeEscape = (input = "") => {
  const [targets, ...mapStr] = input.split("\n");
  const [row, column] = targets.split(" ").map((i) => +i - 1);

  const matrix = mapStr.map((str) => {
    const arr = [];
    for (let char of str) {
      arr.push(+char);
    }

    return arr;
  });

  const N = matrix.length;
  const M = matrix[0].length;

  const queue = [];

  // 이동할 네 방향 정의(상,하,좌,우)
  // 코드 간결화 필수
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const bfs = () => {
    queue.push([0, 0]);

    while (queue.length !== 0) {
      const [nx, ny] = queue.shift();

      for (let i = 0; i < dx.length; i++) {
        const mx = nx + dx[i];
        const my = ny + dy[i];
        if (mx >= 0 && mx < N && my >= 0 && my < M && matrix[mx][my] === 1) {
          // 이미 방문한 위치는 1보다 크기 때문에 count할 필요가 없다(최소경로)
          queue.push([mx, my]);

          matrix[mx][my] = matrix[nx][ny] + 1;
        }
      }
    }
  };
  bfs();
  console.log(matrix);
  return matrix[row][column];
};

test("should ", () => {
  expect(mazeEscape("5 6\n101010\n111111\n000001\n111111\n111111")).toBe(10);
});
