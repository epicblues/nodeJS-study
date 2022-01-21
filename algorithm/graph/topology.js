const [meta, ...edgeStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [v, e] = meta.split(" ").map(Number);

// 진입 차수 0으로 초기화
const inDegree = Array(v + 1).fill(0);

const graph = Array(v + 1)
  .fill()
  .map((i) => []);
// 그래프에서 각 노드로 향하는 진입차수를 구한다.

edgeStr.forEach((str) => {
  const [start, end] = str.split(" ").map((i) => +i);
  graph[start].push(end);
  inDegree[end]++;
});
console.log(graph);
// 시작

const answer = [];

const queue = [];

for (let i = 1; i <= v; i++) {
  if (inDegree[i] === 0) {
    // 차수가 0 인 노드를 뽑는다.
    queue.push(i);
  }
}
do {
  let start = queue.pop();
  answer.push(start);
  for (let end of graph[start]) {
    inDegree[end]--;
    if (inDegree[end] === 0) {
      queue.push(end);
    }
  }
} while (queue.length > 0);

console.log(answer.join(" "));
