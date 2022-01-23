let [v, ...graphs] = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

v = +v;
const inDegree = Array(v + 1).fill(null);
const cost = Array(v + 1).fill(0); // 그 수업 자체를 듣는 비용
const edges = Array(v + 1)
  .fill()
  .map(() => []);

// 그래프 등록;
// edges[start] = [end1, end2, ...];
graphs.forEach((str, index) => {
  const data = str.split(" ").map(Number);
  const [c, ...required] = data.slice(0, data.length - 1);

  inDegree[index + 1] = required.length;
  for (let course of required) {
    edges[course].push(index + 1);
  }
  cost[index + 1] = c;
});

const q = [];
let visited = Array(v + 1).fill(false);
inDegree[0] = Infinity;
const result = [...cost]; // 실제 결과를 출력할 값(위상 저열ㄹ 대상)
inDegree.forEach((indeg, index) => {
  if (indeg === 0 && !visited[index]) {
    // 첫 시작점은 이미 cost가 등록되어 있으므로 cost를 추가할 필요가 없다.
    q.push(index);
  }
});

let currNode = q.shift();
do {
  visited[currNode] = true;

  for (let next of edges[currNode]) {
    inDegree[next]--;
    // 이 next한 것들이 다음 차수에 들어올 수 있는지 check
    if (inDegree[next] === 0) {
      q.push(next);
      // 연결 되어 있으면 지금까지 더했던 비용을 추가한다.
      result[next] += result[currNode];
    }
  }

  currNode = q.shift();
} while (currNode);
// 해당 코스로 가는 최소 비용.

console.log(result.slice(1).join("\n"));
