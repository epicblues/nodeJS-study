const [N, M, ...graphStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const INF = 10 ** 9;
const V = +N;
const E = +M;

const graph = Array(V + 1)
  .fill()
  .map((i) => Array(V + 1).fill(INF));

graphStr.forEach((str) => {
  const [start, end, cost] = str.split(" ").map(Number);
  graph[start][end] = cost;
});

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

// 비용 삽입

// V 번을 거쳐가는 경우
for (let i = 1; i <= V; i++) {
  // j -> i번 노드 거치기 -> k 도착
  for (let j = 1; j <= V; j++) {
    if (j === i) continue;
    for (let k = 1; k <= V; k++) {
      if (k === j) continue;
      graph[j][k] = Math.min(graph[j][i] + graph[i][k], graph[j][k]);
    }
  }
}

let buffer = [];

//graph 순회
for (let i = 1; i <= V; i++) {
  const rowData = [];
  for (let j = 1; j <= V; j++) {
    rowData.push(graph[i][j] === INF ? INF : graph[i][j]);
  }
  buffer.push(rowData.join(" "));
}

console.log(buffer.join("\n"));
