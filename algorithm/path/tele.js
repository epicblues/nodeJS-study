// 모두 메시지를 받는 데까지 걸리는 시간
// C 시작 : 최단 거리 구하면 되지 않나?
// 가장 오래 걸리는 table을 마지막에?

const { heapPop, heapPush } = require("./heap");

const [meta, ...graphStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [V, E, start] = meta.split(" ").map(Number);

const graph = Array(V + 1)
  .fill()
  .map((i) => []);

graphStr.forEach((str) => {
  const [start, end, cost] = str.split(" ").map(Number);
  graph[start].push([end, cost]);
});

const table = Array(V + 1).fill(Infinity);
table[start] = 0;
const visited = Array(V + 1).fill(false);

const queue = [];
heapPush(queue, [start, table[start]]);

while (queue.length > 0) {
  const [next, nextCost] = heapPop(queue);
  if (visited[next]) continue;
  visited[next] = true;
  for (let edge of graph[next]) {
    if (!visited[edge[0]] && table[edge[0]] > edge[1] + nextCost) {
      table[edge[0]] = edge[1] + nextCost;
      heapPush(queue, [edge[0], table[edge[0]]]);
    }
  }
}
// infinity가 아닌 node 구하기
const answer = [];
let max = 0;
for (let cost of table) {
  if (cost !== Infinity && cost > 0) {
    answer.push(cost);
    max = Math.max(max, cost);
  }
}

console.log(`${answer.length} ${max}`);
