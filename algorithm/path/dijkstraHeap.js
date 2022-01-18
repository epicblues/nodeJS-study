const { heapPop, heapPush } = require("./heap.js");

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
  .map(() => []);
const visited = Array(N + 1).fill(false);

// 처음에는 무한의 수로 시작한다.
// heap 자료구조로 만들어보기
// 넣는 데이터 : 튜플 ([대상 노드, 비용])

const distance = Array(N + 1).fill(INF);
distance[start] = 0;

nodes.forEach((str) => {
  const [start, target, cost] = str.split(" ").map((i) => +i);
  graph[start].push([target, cost]);
});

const queue = [];
heapPush(queue, [start, 0]);

while (queue.length > 0) {
  let [target, dist] = heapPop(queue);
  // 틀린 부분
  if (visited[target]) continue;
  visited[target] = true;
  for (let edge of graph[target]) {
    let nextNode = edge[0];
    let nextDistance = edge[1];
    // start로 부터 해당 node로 가는 최단거리 갱신
    // 기존에 등록된 최단 거리와
    // 검증된 target으로 오는 최단 거리 비용 + 다음 node로 이동할 비용 비교
    if (distance[nextNode] > distance[target] + nextDistance) {
      distance[nextNode] = nextDistance + distance[target];
      heapPush(queue, [nextNode, distance[nextNode]]);
    }
  }
}

console.log(distance.slice(1).join("\n"));
