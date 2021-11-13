const adjacencyList = new Map();

const routes = [
  ["KMS", "KMG"],
  ["PKH", "KHB"],
  ["PKH", "KMS"],
  ["KMG", "KHB"],
  ["CJS", "KHB"],
  ["KSI", "KMS"],
  ["KSI", "KMG"],
];

const addNode = (airport) => {
  if (typeof airport !== "string") return false;
  adjacencyList.set(airport, []);
};

// undirected adjacency
const addEdge = (start, destination) => {
  if (!(adjacencyList.get(start) && adjacencyList.get(destination)))
    throw new Error("Add Nodes First");
  adjacencyList.get(start).push(destination);
  adjacencyList.get(destination).push(start);
};

const addTwoNodesWithEdge = (start, destination) => {
  addNode(start);
  addNode(destination);
  addEdge(start, destination);
};

const createGraph = (...nodesToAdd) => {
  nodesToAdd.forEach(addNode);
  routes.forEach((route) => {
    addEdge(...route);
  });
  console.log(adjacencyList);
};

createGraph("KMS", "PKH", "KHB", "KMG", "CJS", "KSI");

const bfs = (start) => {
  const visited = new Set();
  const queue = [start];
  visited.add(start);
  console.log(start);
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      if (visited.has(destination)) continue;
      queue.push(destination);
      visited.add(destination);
      console.log(destination);
    }
  }
};

// bfs("KMS");

const visited = new Set();
// 방문한 지역 확인용 set -> 중복 불가능한 특성을 이용
const dfs = (start, visited) => {
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  if (!destinations) return;
  for (const destination of destinations) {
    if (visited.has(destination)) continue;
    dfs(destination, visited);
  }
};

dfs("PKH", visited);
