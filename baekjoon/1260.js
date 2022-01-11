const inputs = `9 8 1
1 2
1 3
2 4
2 5
3 6
3 7
4 8
4 9`.split("\n");
const [N, M, V] = inputs[0].split(" ").map((i) => +i);
const graph = Array(N + 1)
  .fill()
  .map((i) => []); // 정점 번호와 매칭시키기 위해
// graph 등록하기(양방향)
for (let i = 1; i <= M; i++) {
  const [key, value] = inputs[i].split(" ").map((i) => +i);
  if (graph[key].indexOf(value) === -1) graph[key].push(value);
  if (graph[value].indexOf(key) === -1) {
    graph[value].push(key);
  }
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function DFS(V, graph, stack) {
  if (stack.length === N) return stack;
  const edges = graph[V];

  for (let node of edges) {
    if (stack.indexOf(node) === -1) {
      stack.push(node);
      DFS(node, graph, stack);
    }
  }
  return stack;
}

function BFS(V, graph, queue) {
  const edges = graph[V];
  const temp = [];
  // console.log(edges);
  for (let i = 0; i < edges.length; i++) {
    const node = edges[i];
    if (queue.indexOf(node) === -1) {
      queue.push(node); // 이 친구들만 traverse 하고 싶다.
      temp.push(node);
      // 이미 한 번 traverse 한 애들을 갖고 순회
    }
  }
  for (let i = 0; i < temp.length; i++) {
    const node = temp[i];
    BFS(node, graph, queue);
  }
  return queue;
}

console.log(DFS(V, graph, [V]).join(" "));
console.log(BFS(V, graph, [V]).join(" "));
