//@ts-check

const myAnswers = (input = "") => {
  let [mapSize, pos, ...mapStr] = input.split("\n");
  const [N, M] = mapSize.split(" ").map((i) => +i);
  // 세로 크기 가로 크기
  const [startY, startX, watch] = pos.split(" ").map((i) => +i);
  const realMap = mapStr.map((m) => m.split(" ").map((i) => +i));

  const visited = Array(N)
    .fill()
    .map((i) => Array(M).fill(0));

  // 시뮬레이션 문제
  let count = 1;
  // 시작점
  let nWatch = watch;
  let cx = startX;
  let cy = startY;
  visited[cy][cx]++;

  // 북 동 남 서
  let dx = [0, -1, 0, 1];
  let dy = [-1, 0, -1, 0];

  let firstWatch = watch;
  while (true) {
    // 회전
    console.log(visited);
    nWatch = (nWatch + 5) % 4;
    // 이동 예측하기
    let nx = cx + dx[nWatch];
    let ny = cy + dy[nWatch];
    console.log(ny, nx);
    if (
      nx >= M ||
      nx < 0 ||
      ny >= N ||
      ny < 0 ||
      visited[ny][nx] > 0 ||
      realMap[ny][nx] === 1
    ) {
      // 회전 했는데 이동할 수가 없다.
      if (nWatch === firstWatch) {
        // 4방향 다 점검했을 경우에는?
        cx = cx - dx[nWatch];
        cy = cy - dy[nWatch]; // 뒤쪽 방향 이동
        if (
          cx >= M ||
          cx < 0 ||
          cy >= N ||
          cy < 0 ||
          realMap[cy][cx] === 1
          // 뒤쪽이 바다거나 맵의 지형을 초과한 경우
        ) {
          console.log("end");
          break;
        }
        count++; // 뒤가 바다가 아니므로 계속
        visited[cy][cx]++;
        console.log("뒤로 이동");
      }
      console.log("그냥 방향전환");
      continue;
    }

    // 실제 이동
    console.log("여기까지?");
    cx = nx;
    cy = ny;
    count++;
    visited[cy][cx]++;
    firstWatch = nWatch; //초기화
  }

  // 회전

  return count;
};

test("should ", () => {
  expect(myAnswers("4 4\n1 1 0\n1 1 1 1\n1 0 0 1\n1 1 0 1\n1 1 1 1")).toBe(3);
});
