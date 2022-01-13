const graph = [
  [],
  [2, 3, 8], // 1번 노드는 2,3,8 s노드에 연결되어 있다.
  [1, 7],
  [4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = Array(9).fill(0);
const answerBuffer = [];
const dfs = (start) => {
  if (visited[start] > 0) return;
  visited[start]++; // 방문했다.
  answerBuffer.push(start);

  // 검색 한다.
  for (let node of graph[start]) {
    dfs(node);
  }

  // 방문하지 않은 노드가 없을때
  // DFS end point
};

dfs(1);

const bfsVisited = Array(9).fill(false);
const bfsAnswer = [];
const bfs = (start = 0) => {
  // 시작점에서 동적으로 큐에 데이터 삽입
  const queue = [start];
  bfsVisited[start] = true;
  bfsAnswer.push(start);

  // 큐가 빌 때까지 반복
  while (queue.length !== 0) {
    const next = queue.shift();
    const children = graph[next];

    for (let child of children) {
      // 해당 원소에 연결된, '아직 방문하지 않은' 언소들을 큐에 삽입
      if (bfsVisited[child]) continue;
      queue.push(child);
      bfsVisited[child] = true;
      bfsAnswer.push(child);
    }
  }
};

bfs(1);

console.log(bfsAnswer);
