const [meta, s, ...nodes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const INF = 9876543210;

const [N, E] = meta.split(" ").map((i) => +i); // 노드의 개수(Vertex), 간선의 개수 (Edges)
const start = +s;
const graph = Array(N + 1)
  .fill()
  .map((i) => []);
const visited = Array(N + 1).fill(false);

// nodes를 graph로
// a번 노드에서 b번 노드로 가는데 드는 비용 c
