// 최소 신장 트리

// 먼저 최소 신장 트리를 만든다.

// edge들을 정렬한다.
const findParent = (parent, a) => {
  if (parent[a] !== a) {
    parent[a] = findParent(parent, parent[a]);
  }

  return parent[a];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a === b) return false;
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
  return true;
};

const [meta, ...edges] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = meta.split(" ").map(Number);

const parent = Array(n + 1)
  .fill()
  .map((i, index) => index);

const graph = edges
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);

// 마지막에 추가한 비용 보관
let connected = 0;
let totalCost = 0;
for (let edge of graph) {
  let [start, end, cost] = edge;

  if (unionParent(parent, start, end)) {
    totalCost += cost;
    connected++;
  } else {
    continue;
  }
  if (connected >= v - 2) break;
}

console.log(totalCost);
