const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");

const size = +input[0];
const N = size;
const map = Array(size + 1)
  .fill()
  .map(() => Array(size + 1).fill(0));
const appleCount = +input[1];
input.slice(2, 2 + appleCount).forEach((str) => {
  const [x, y] = str.split(" ").map(Number);
  map[x][y] = "A";
});

const changePositionCount = input[2 + appleCount];
// '처음부터' 몇초 되었을 떄 turn 하나
const changePositionInfos = input.slice(3 + appleCount).map((str) => {
  const tuple = str.split(" ");
  tuple[0] = +tuple[0];
  return tuple;
});

// 현재의 방향 상태를 확인하고 다음 이동 경로를 정한다.

let counter = 0;
let currentDirection = 0;
let currPosition = [1, 1];
map[1][1]++;
let bodyInfo = [[1, 1]];
end: for (let i = 0; i < changePositionInfos.length; i++) {
  const [maxSec, nextDirection] = changePositionInfos[i]
    ? changePositionInfos[i]
    : [Infinity, ""];

  let currentMaxSec = maxSec - counter;
  for (let j = 1; j <= currentMaxSec; j++) {
    const [x, y] = getNextPos(...currPosition);
    if (y > N || y < 1 || x > N || x < 1 || map[x][y] === 1) {
      counter++;
      break end;
    }

    if (map[x][y] !== "A") {
      let tail = bodyInfo.shift();
      map[tail[0]][tail[1]] = 0;
    }
    map[x][y] = 1;
    bodyInfo.push([x, y]);
    currPosition = [x, y];
    counter++;
  }
  currentDirection = (currentDirection + (nextDirection === "D" ? 1 : 3)) % 4;
}

console.log(counter);

function getNextPos(x, y) {
  switch (currentDirection) {
    case 0:
      return [x, y + 1];
    case 1:
      return [x + 1, y];
    case 2:
      return [x, y - 1];
    case 3:
      return [x - 1, y];
  }
}
