const [first, ...edges] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const [N, M, V] = first.split(" ").map((i) => +i);
console.log(edges);
if (edges[edges.length - 1] === "") {
  edges.pop();
}
const graph = Array(N + 1)
  .fill()
  .map((i) => []);
// 2차원 인접 리스트 생성
for (let edge of edges) {
  const [start, end] = edge.split(" ").map((i) => +i);

  graph[start].push(end);
  graph[end].push(start);
}
// 정렬(오름차순)
for (let edge of graph) {
  edge.sort((a, b) => a - b);
}

const dfsVisited = Array(N + 1).fill(false);
const dfsAnswer = [];
function DFS(start) {
  if (dfsVisited[start]) return;
  dfsVisited[start] = true;
  dfsAnswer.push(start);

  for (let child of graph[start]) {
    DFS(child);
  }
}

DFS(V);

const bfsAnswer = [];
const BFS = (start) => {
  const bfsVisited = Array(N + 1).fill(false);
  const queue = [start];
  bfsVisited[start] = true;
  bfsAnswer.push(start);

  while (queue.length !== 0) {
    const next = queue.shift();

    for (let child of graph[next]) {
      if (bfsVisited[child]) continue;
      bfsVisited[child] = true;
      queue.push(child);
      bfsAnswer.push(child);
    }
  }
};

BFS(V);

console.log(dfsAnswer.join(" "));
console.log(bfsAnswer.join(" "));
