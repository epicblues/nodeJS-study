//@ts-check

const { readFileSync } = require("fs");

const [meta, ...edges] = readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [v, e] = meta.split(" ").map(Number);
const inDegree = Array(v + 1).fill(0);
inDegree[0] = Infinity;

class Queue {
  left = 0;
  right = -1;
  data = {};

  enqueue(value) {
    this.right++;
    this.data[this.right] = value;
  }

  dequeue() {
    if (this.size === 0) return null;
    let returnValue = this.data[this.left];
    this.left++;
    return returnValue;
  }

  get size() {
    return this.right - this.left + 1;
  }
}

const graph = Array(v + 1)
  .fill()
  .map(() => []);

edges.forEach((str) => {
  const [start, end] = str.split(" ").map(Number);
  inDegree[end]++;
  graph[start].push(end);
});

const q = new Queue();

for (let i = 1; i < inDegree.length; i++) {
  if (inDegree[i] === 0) {
    q.enqueue(i);
  }
}

let now = q.dequeue();

let answer = [];
while (q.size > 0) {
  answer.push(now);
  for (let next of graph[now]) {
    inDegree[next]--;
    if (inDegree[next] === 0) {
      q.enqueue(next);
    }
  }

  now = q.dequeue();
}

console.log(answer.join(" "));
