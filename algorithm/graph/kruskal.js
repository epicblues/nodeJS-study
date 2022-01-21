const findParent = (parent, a) => {
  if (parent[a] !== a) {
    parent[a] = findParent(parent, parent[a]);
  }
  return parent[a];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);

  if (a > b) {
    parent[a] = b;
    return true;
  } else if (a < b) {
    parent[b] = a;
    return true;
  } else {
    // 둘다 같은 부모 노드
    // cycle
    return false;
  }
};

const [meta, ...edgeStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [v, e] = meta.split(" ").map(Number);
const parent = Array(v + 1)
  .fill()
  .map((a, index) => index);

let cost = 0;
let connectedEdge = 0;
let edges = edgeStr
  .map((str) => {
    return str.split(" ").map(Number);
  })
  .sort((a, b) => a[2] - b[2]); // 그리디 알고리즘 : 가장 비용이 작은 간선부터 조사

for (let edge of edges) {
  if (connectedEdge === v - 1) break;
  const isConnected = unionParent(parent, edge[0], edge[1]);
  if (isConnected) {
    connectedEdge++;
    cost += edge[2];
  }
}

console.log(cost);
