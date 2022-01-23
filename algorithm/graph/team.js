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
  } else if (a < b) {
    parent[b] = a;
  }
};

let [meta, ...graph] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = meta.split(" ").map(Number);

const parent = Array(N + 1)
  .fill()
  .map((i, index) => index);

let answer = [];

graph.forEach((str) => {
  let [type, start, end] = str.split(" ").map(Number);
  if (type === 0) {
    unionParent(parent, start, end);
  }
  if (type === 1) {
    start = findParent(parent, start);
    end = findParent(parent, end);
    answer.push(start === end ? "YES" : "NO");
  }
});

console.log(answer.join("\n"));
