const [meta, ...mapArr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// matrix[x, y]로 접근
const [Y, X] = meta.split(" ").map((i) => +i);

const matrix = mapArr.map((str) => str.split(" ").map((i) => +i));

// 익은 토마토 찾기
let startTom = [];
//

for (let i = 0; i < X; i++) {
  for (let j = 0; j < Y; j++) {
    if (matrix[i][j] === 1) startTom.push([i, j]);
  }
}

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

let day = 0;

const bfs = (node = [0, 0], queue) => {
  let [x, y] = node;
  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < X && ny < Y) {
      if (matrix[nx][ny] === 0) {
        matrix[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
};
while (true) {
  // 오늘 익어서 내일 탐색해야 할 토마토 좌표
  const nextQueue = [];
  while (startTom.length !== 0) {
    const start = startTom.pop();
    bfs(start, nextQueue);
  }
  if (nextQueue.length !== 0) {
    startTom = nextQueue;
    // 오늘 추가한 것이 있다(익은 토마토가 있다)
    day++;
  } else {
    // 오늘 다 찾았는데 등록한 것이 없다.
    // 이미 다 익은 상태(하루를 추가할 필요가 없다.)
    break;
  }
}

// 0이 있는가
let isFull = true;
point: for (let i = 0; i < X; i++) {
  for (let j = 0; j < Y; j++) {
    if (matrix[i][j] === 0) {
      isFull = false;
      break point;
    }
  }
}

console.log(isFull ? day : -1);

// 확인하고 queue에 넣어야 하는 상황

// startTom

// 모든 익은 토마토의 search가 끝났다.
