// 양방향

// 1번 회사 -> K번 회사(소개팅) -> X번 회사
// 비용 1;

const [input, ...graphStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.split(" ").map(Number);

// 1 to X to K
const [X, K] = graphStr.pop().split(" ").map(Number);

const graph = Array(V + 1)
  .fill()
  .map((i) => Array(V + 1).fill(Infinity));
graphStr.forEach((str) => {
  const [start, end] = str.split(" ").map(Number);
  graph[start][end] = 1;
  // 양방향 이동
  graph[end][start] = 1;
});

const heapPush = (heap = [], [start, cost] = [2, 4]) => {
  // 2 로 가는 비용 4;
  heap.push([start, cost]);
  if (heap.length === 1) return;
  let child = heap.length - 1;

  while (child !== 0) {
    let parent = Math.floor((child - 1) / 2);
    if (heap[parent][1] > heap[child][1]) {
      let temp = heap[parent];
      heap[parent] = heap[child];
      heap[child] = temp;
      child = parent;
    } else break;
  }
};

const heapPop = (heap = []) => {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  let result = heap[0];
  let temp = heap.pop();

  let parent = 0;
  while (true) {
    let c1 = (parent + 1) * 2 - 1;
    let c2 = (parent + 1) * 2;
    if (c1 >= heap.length) break;
    if (c2 >= heap.length) {
      if (heap[c1][1] > temp[1]) break;
      heap[parent] = heap[c1];
      parent = c1;
      continue;
    }
    const best = heap[c1][1] - heap[c2][1] < 0 ? c1 : c2;
    if (heap[best][1] > temp[1]) break;
    heap[parent] = heap[best];
    parent = best;
  }

  heap[parent] = temp;
  return result;
};

// i 에서 k 로 자동으로 이동하는 다익스트라.
// 비용 저장 테이블;

const dijkstra = (start) => {
  let table = Array(V + 1).fill(Infinity);
  table[start] = 0;
  const heap = [];
  heapPush(heap, [start, 0]);
  const visited = Array(V + 1).fill(false);
  while (heap.length > 0) {
    const [next, cost] = heapPop(heap);
    visited[next] = true;
    // 직접 가는 것과
    // 거쳐 가는 것 비교;
    for (let i = 1; i < table.length; i++) {
      if (!visited[i] && cost + graph[next][i] < table[i]) {
        table[i] = cost + graph[next][i];
        heapPush(heap, [i, table[i]]);
      }
    }
  }

  // start용 최소 비용 테이블을 return 한다.
  return table;
};

// 다익스트라를 2번 돌린다. (1,K)
console.log(dijkstra(1));
const oneToK = dijkstra(1)[K];
if (oneToK === Infinity) console.log(-1);
else {
  let KtoX = dijkstra(K)[X];
  console.log(KtoX === Infinity ? -1 : oneToK + KtoX);
}
